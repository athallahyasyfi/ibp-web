import { defineField, defineType } from "sanity";

export const product = defineType({
  name: "product",
  title: "Produk",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nama Produk",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "brand",
      title: "Merek / Brand",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "type",
      title: "Tipe Izin Edar",
      type: "string",
      description: "Contoh: AKD, AKL, atau AKD / AKL",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Deskripsi Singkat",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "specs",
      title: "Spesifikasi Produk",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "category",
      title: "Kategori Produk",
      type: "string",
      options: {
        list: [
          { title: "Consumable", value: "consumable" },
          { title: "IVD Instrument", value: "ivd-instrument" },
          { title: "IVD Reagent", value: "ivd-reagent" },
          { title: "Rehabilitation & Assistive Devices", value: "rehabilitation-assistive-devices" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Foto Produk",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
