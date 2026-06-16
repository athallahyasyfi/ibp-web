import { defineField, defineType } from "sanity";

export const category = defineType({
  name: "category",
  title: "Kategori Produk",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Nama Kategori",
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
      name: "description",
      title: "Deskripsi",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "iconName",
      title: "Nama Ikon Lucide",
      type: "string",
      description: "Pilihan ikon: Package, Microscope, FlaskConical, HeartHandshake",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
