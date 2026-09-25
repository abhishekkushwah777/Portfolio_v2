// src/lib/sanityClient.js

import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'c9lc3ewd',
  dataset: 'data_gooch',
  apiVersion: '2025-01-01',
  useCdn: true
})