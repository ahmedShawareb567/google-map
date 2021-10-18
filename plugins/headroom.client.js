import Headroom from 'headroom.js'
const theHeader = document.querySelector('.theHeader')
if (theHeader) {
  const headroom = new Headroom(theHeader, {
    offset: 100,
    classes: {
      // when element is initialised
      initial: 'theHeader--fixed',
      // when scrolling up
      pinned: 'theHeader--pinned',
      // when scrolling down
      unpinned: 'theHeader--unpinned',
      // when above offset
      top: 'theHeader--top',
      // when below offset
      notTop: 'theHeader--not-top',
      // when at bottom of scoll area
      bottom: 'theHeader--bottom',
      // when not at bottom of scroll area
      notBottom: 'theHeader--not-bottom',
      // when frozen method has been called
      frozen: 'theHeader--frozen',
    },
  })
  headroom.init()
}
