function revealBase(startClass: string, endClass: string) {
  return function (id: string, delay: number = 0) {
    const element = document.getElementById(id)

    if (!element) {
      return null
    }

    if (!element?.classList.contains('opacity-0')) {
      throw new Error('Element is already revealed, is necessary to add opacity-0 class to the element')
    }

    element?.classList.add(startClass)

    const observer = new IntersectionObserver((entries) => {
      setTimeout(() => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove(startClass)
            entry.target.classList.add(endClass)
          }
        })
      }, delay)
    })

    observer.observe(element!)
  }
}

export const revealTop = revealBase('START_TOP_REVEAL', 'END_TOP_REVEAL')
export const revealBottom = revealBase('START_BOTTOM_REVEAL', 'END_BOTTOM_REVEAL')
export const revealLeft = revealBase('START_LEFT_REVEAL', 'END_LEFT_REVEAL')
export const revealRight = revealBase('START_RIGHT_REVEAL', 'END_RIGHT_REVEAL')
