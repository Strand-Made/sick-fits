import { PAGINATION_QUERY } from '../components/Pagination';

export default function paginationField() {
  return {
    keyArgs: false, // tells apollo we will take care of everything
    read(existing = [], { args, cache }) {
      const { skip, first } = args;

      const data = cache.readQuery({ query: PAGINATION_QUERY });
      const count = data?._allProductsMeta?.count;
      const page = skip / first + 1;
      const pages = Math.ceil(count / first);

      const items = existing.slice(skip, skip + first).filter((x) => x);
      // if there are items AND there aren't enough items
      // AND we are on the last page just send it
      if (items.length && items.length !== first && page === pages) {
        return items;
      }
      if (items.length !== first) {
        return false;
      }

      if (items.length) {
        console.log(`There are ${items.length}`);
        return items;
      }
      return false;
    },
    // first thing it does it asks the read function for those items.
    // we can either do one of two things:
    // first thing we can do is return the items because they are already in cache
    // the other thing we can do is return false from here (network request)
    merge(existing, incoming, { args }) {
      const { skip, first } = args;
      console.log('Merging items from the network');
      const merged = existing ? existing.slice(0) : [];
      for (let i = skip; i < skip + incoming.length; ++i) {
        merged[i] = incoming[i - skip];
      }
      //
      return merged;
    },
  };
}
