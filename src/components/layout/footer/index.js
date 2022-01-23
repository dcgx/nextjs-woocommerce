const Footer = ({ footer }) => {
  const {
    copyrightText,
    footerMenuItems,
    sidebarOne,
    sidebarTwo,
    socialLinks,
  } = footer || {}

  console.log(footer)
  return (
    <>
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
        </a>
      </footer>{' '}
    </>
  )
}

export default Footer
