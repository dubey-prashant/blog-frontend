window.onload = function () {

  const cover = document.querySelector('.cover')
  const header = document.querySelector('header')
  if (cover) {
    header.style.position = 'fixed'
    const coverObserverOptions = {
      rootMargin: "-250px 0px 0px 0px"
    }
    const coverObserver = new IntersectionObserver(
      (entries, coverObserver) => {
        entries.forEach(entry => {
          if (entry?.isIntersecting) {
            header.style.opacity = '0'
            header.style.transform = 'translateY(-100%)'
          } else {
            header.style.opacity = '1'
            header.style.transform = 'translateY(0)'
          }
        })
      }, coverObserverOptions)

    coverObserver.observe(cover)
  }
}