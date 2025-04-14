// layoutTools.js

import { Filesystem, Directory, Encoding } from '@capacitor/filesystem'

export function parseGptToLayout(gptBlocks) {
  return gptBlocks.map(block => ({
    type: block.type,
    props: { ...block }
  }))
}

export async function saveLayout(layout, filename = 'layout.json') {
  try {
    await Filesystem.writeFile({
      path: filename,
      data: JSON.stringify(layout),
      directory: Directory.Documents,
      encoding: Encoding.UTF8
    })
    console.log('✅ Layout saved')
  } catch (err) {
    console.error('❌ Save failed:', err)
  }
}
