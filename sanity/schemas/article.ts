import { defineField, defineType } from "sanity";

export const article = defineType({
  name: "article",
  title: "Artikel",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Judul Artikel",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Kategori Artikel",
      type: "string",
      description: "Contoh: Edukasi, Regulasi, Teknologi",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "date",
      title: "Tanggal Rilis",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "readTime",
      title: "Estimasi Waktu Baca",
      type: "string",
      description: "Contoh: 5 Menit Baca",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Deskripsi Ringkas",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "body",
      title: "Isi Lengkap Artikel",
      type: "text",
      description: "Gunakan paragraf baru untuk membuat artikel lebih rapi.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Gambar Artikel",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
