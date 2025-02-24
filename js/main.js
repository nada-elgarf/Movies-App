window.addEventListener('scroll', function () {
  const header = document.querySelector('.navbar')
  const navLinks = document.querySelectorAll('.custom-nav-link')
  const brandLink = document.querySelector('.navbar-brand')

  if (window.scrollY > 0) {
    header.classList.add('shadow')
    navLinks.forEach(link => {
      link.style.color = '#020307'
    })
    brandLink.style.color = '#ff2c1f'
  } else {
    header.classList.remove('shadow')
    navLinks.forEach(link => {
      link.style.color = '#ff2c1f'
    })
    brandLink.style.color = '#ffffff'
  }
})

document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.custom-nav-link')
  const brandLink = document.querySelector('.navbar-brand')

  navLinks.forEach(link => {
    link.style.color = '#ff2c1f'
  })
  brandLink.style.color = '#ffffff'

  const navbarCollapse = document.querySelector('.navbar-collapse')

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 992) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse)
        bsCollapse.hide()
      }
    })
  })

  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section')
    const scrollY = window.pageYOffset

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight
      const sectionTop = section.offsetTop - 100
      const sectionId = section.getAttribute('id')

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector('.navbar-nav a[href*=' + sectionId + ']').classList.add('active')
      } else {
        document.querySelector('.navbar-nav a[href*=' + sectionId + ']').classList.remove('active')
      }
    })
  })
})

document.addEventListener('DOMContentLoaded', function () {
  const newsletterForm = document.querySelector('#newsletter form')

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault()
      const email = this.querySelector('input[type="email"]').value

      if (email) {
        this.querySelector('input[type="email"]').value = ''
        alert('شكراً لاشتراكك! سنرسل لك آخر الأخبار والعروض.')
      }
    })
  }
})
