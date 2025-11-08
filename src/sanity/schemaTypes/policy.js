export default {
  name: "policy",
  title: "Policy",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required()
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: "lastUpdated",
      title: "Last Updated",
      type: "date",
      validation: (Rule) => Rule.required()
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block"
        }
      ]
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first"
    }
  ],
  orderings: [
    {
      title: "Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }]
    }
  ]
};
