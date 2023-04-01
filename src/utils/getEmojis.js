// @flow
import ora from 'ora'

import cache from './emojisCache'

import { emojis } from './emoji'

const getEmojis = async (
  skipCache: boolean = false
): Promise<Array<Object>> => {
  return emojis.gitmojis
}

export default getEmojis
