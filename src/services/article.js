import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const ApiKey = import.meta.env.VITE_API_KEY;
const options = {
    method: 'GET',
    url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
    params: {
      url: 'https://time.com/6266679/musk-ai-open-letter/',
      length: '3'
    },
    headers: {
      'X-RapidAPI-Key': '62e10c04ecmsh4f8713a4df28055p1aa91bjsn7ff6b90985b0',
      'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
    }
};

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', ApiKey);
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
        })
    }),  
});

export const { useLazyGetSummaryQuery } = articleApi;