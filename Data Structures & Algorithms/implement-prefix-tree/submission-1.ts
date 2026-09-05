class PrefixTreeNode {
  val: string
  children: Map<string, PrefixTreeNode>
  isEndOfWord: boolean;

  constructor(val: string, children: Map<string, PrefixTreeNode>, isEndOfWord: boolean = false) {
    this.val = val;
    this.children = children
    this.isEndOfWord = false
  }
}

class PrefixTree {
  root: PrefixTreeNode

  constructor() {
    this.root = new PrefixTreeNode("", new Map(), false)
  }

  // Cada no conten char e filhos

  /**
   * @param {string} word
   * @return {void}
   */
  insert(word: string): void {
    let current = this.root

    for (const char of word) {
      if (!current.children.has(char)) {
        current.children.set(char, new PrefixTreeNode(char, new Map(), false))
      }

      current = current.children.get(char)
    }

    current.isEndOfWord = true
  }

  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word: string): boolean {
    let current = this.root

    for (const char of word) {
      if (!current.children.has(char))
        return false

      current = current.children.get(char)
    }

    if (current.isEndOfWord)
      return true

    return false
  }

  /**
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix: string): boolean { 
      let current = this.root
      
      for(const char of prefix){
        if(!current.children.has(char))
          return false

        current = current.children.get(char)
      }
      
      return true
  }
}