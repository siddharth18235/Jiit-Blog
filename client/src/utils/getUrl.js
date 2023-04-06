export function getUrl() {
    if (process.env.NODE_ENV === 'production') return 'https://jiit-blog-server.onrender.com/api/'
    else return   
  }
  