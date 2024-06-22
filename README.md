This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Notes
### Caching and revalidating
In the "heroes" section, I set up caching manually, since I'm using `axios` instead of `fetch`. I use `react`'s `cache` function to cache the results of the API call, and I set up `revalidate` route setting to 1 hour.

### Building up the graph on the server
I fetch all the data for the graph on the server, so that I don't have to include `axios` in the client bundle. 

In any case I'd need to fetch all the data before displaying the graph.

If the data was in a local database, then fetching it on the server would make even more sense since that would save a lot of network requests.

### Laying out the graph with Dagre
I used a library, recommended by `react-flow`'s docs to automatically lay out the nodes.

### Avoiding fetching referenced resources
I didn't fetch the referenced resources (such as `hero.films` or `film.starships`) because it would take too long. The API is not realistic in this respect: in the real world these would be references in a database or something.