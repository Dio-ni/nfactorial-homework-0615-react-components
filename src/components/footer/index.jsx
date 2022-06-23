
const swLinks = [
  
  {
    url: "https://starwars-visualguide.com/assets/img/planets/4.jpg",
    name: "star_wars_poster1",
  },
  {
    url: "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg",
    name: "star_wars_poster2",
  },
];

export const FooterPage = (item) => {
  return (
    <>


    <div class="footer-basic">
      <footer>
        <div class="social">
          <p>POsters !!!</p>
        {swLinks.map((link) => (
          <img
            key={link.name}
            className="poster"
            src={link.url}
            target="_blank"
            alt={link.name}
            rel="noreferrer"
          />
          
        ))}
        </div>
        <p class="copyright">Dio.ni ~ 2022</p>
      </footer>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>

      </>
  );
}
  
export default FooterPage;