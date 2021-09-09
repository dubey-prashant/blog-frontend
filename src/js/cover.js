window.onload = function () {

  const cover = document.querySelector('.cover')
  const header = document.querySelector('header')

  const coverObserverOptions = {}
  const coverObserver = new IntersectionObserver(
    (entries, coverObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          header.style.display = 'none'
        } else {
          header.style.display = 'block'
        }
      })
    }, coverObserverOptions)

  coverObserver.observe(cover)
}