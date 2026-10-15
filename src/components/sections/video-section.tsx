export function VideoSection() {
   return (
      <section
         className="product-video section section--dark-deep"
         aria-labelledby="product-video-title"
      >
         <div className="container">
            <header className="section-heading section-heading--center">
               <span className="eyebrow">ThreadFlow em ação</span>
               <h2 id="product-video-title">
                  Veja essa mudança acontecer na prática.
               </h2>
            </header>
            <video
               className="product-video__player"
               width={1920}
               height={1200}
               controls
               playsInline
               preload="none"
               poster="/images/thumbnail/ThreadFlow-capa.png"
               aria-label="Apresentação do ThreadFlow"
            >
               <source src="/video/ThreadFlow-video.mp4" type="video/mp4" />
               Seu navegador não suporta vídeos HTML5.{" "}
               <a href="/video/ThreadFlow-video.mp4">
                  Assista ao vídeo do ThreadFlow.
               </a>
            </video>
         </div>
      </section>
   );
}
