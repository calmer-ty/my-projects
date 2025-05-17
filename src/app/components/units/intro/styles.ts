import styled from "@emotion/styled";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Slide = styled(Slider)`
  .slick-slide {
    padding: 1rem 1rem 2rem;
  }
  .slick-arrow {
    position: absolute;
    top: initial;
    bottom: -1rem;
    &::before {
      color: red;
      font-size: 2.25rem;
    }
  }
  .slick-prev {
    left: initial;
    right: 5rem;
  }
  .slick-next {
    right: 2rem;
  }
`;
