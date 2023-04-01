// @flow
import ora from 'ora'

import cache from './emojisCache'

import { emojis } from './emoji'

const getEmojis = async (
  skipCache: boolean = false
): Promise<Array<Object>> => {
  const emojisFromCache = cache.getEmojis()

  if (cache.isAvailable() && !skipCache) return emojisFromCache

  const spinner = ora('Fetching gitmojis').start()

  try {
    cache.createEmojis(emojis)

    if (emojis.length === emojisFromCache.length) {
      spinner.info('Gitmojis already up to date')

      return []
    }

    spinner.succeed('Gitmojis fetched successfully, these are the new emojis:')

    return emojis.filter((emoji) => !emojisFromCache.includes(emoji))
  } catch (error) {
    spinner.fail(`Error: ${error}`)

    return []
  }
}

export default getEmojis
