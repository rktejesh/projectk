import React from "react";

export default function Slides() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://www.google.com/search?q=abstract+images&rlz=1C1VDKB_enIN965IN965&tbm=isch&source=iu&ictx=1&vet=1&fir=-t9Fi9FYIQlOBM%252CeHNjO9eXROmJNM%252C_%253B1tHiD1Q0W1Y6vM%252CQu3rlkNRby-EBM%252C_%253B1YBH_93s8Su_uM%252CeHNjO9eXROmJNM%252C_%253ByPMg_w2YMoXWEM%252C25mMZtpDN-S7WM%252C_%253BOmvh0BKNulZyYM%252Cw-Wnpk4ejw6kUM%252C_%253BlNkDzhKION28QM%252CknYPjktFaRO-rM%252C_%253B45ssrU1800RQDM%252Co4Co9CcSwHrtHM%252C_%253BTgnclEXL2vEMpM%252CeHNjO9eXROmJNM%252C_%253Be7XaAg_-79pAkM%252CGReroULA-WkIHM%252C_%253BVBTTa5gWxELaKM%252CoDCsRfDvt3xK5M%252C_%253B_IaNOZ_yW7m09M%252CFkCIo7nPflhYdM%252C_%253BjVJddLfmESx37M%252CSowKwbh2Tq-3lM%252C_%253BXER97Cb5f195DM%252C0bC0iUg7Uz5_PM%252C_&usg=AI4_-kQ5gHBxC4L3tubVcJr-Dnnk51iHdA&sa=X&ved=2ahUKEwj8xL_FpKD3AhVywzgGHdJoBigQ9QF6BAgcEAE#imgrc=lNkDzhKION28QM"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
