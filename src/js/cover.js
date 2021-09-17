window.onload = function () {

  const cover = document.querySelector('.cover')
  const header = document.querySelector('header')
  if (cover) {
    const coverObserverOptions = {}
    const coverObserver = new IntersectionObserver(
      (entries, coverObserver) => {
        entries.forEach(entry => {
          if (entry?.isIntersecting) {
            header.style.display = 'none'
          } else {
            header.style.display = 'block'
            header.style.position = 'fixed'
          }
        })
      }, coverObserverOptions)

    coverObserver.observe(cover)
  }
}