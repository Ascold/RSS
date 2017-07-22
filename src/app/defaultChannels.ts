import {Channel} from './models/Channel';

export const defaultChannels: Channel[] =  [
  {
    URL: 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fdou.ua%2Ffeed%2F',
    title: 'DOU.UA RSS Feed'
  },
  {
    URL: 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fhvylya.net%2Ffeed%2F',
    title: 'Хвиля RSS Feed'
  },
  {
    URL: 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fsearch.ft.com%2FopenSearch%2Fatom%2F%3FsearchTerms%3Dworld%26sortBy%3Ddate',
    title: 'Financial Times RSS Feed'
  },
  {
    URL: 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnews.microsoft.com%2Ffeed%2F',
    title: 'Microsoft RSS Feed'

  }
];
