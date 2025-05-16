import styled from "@emotion/styled";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Slide = styled(Slider)`
  .slick-slide {
    padding: 0 1rem 2rem;
  }
  .slick-arrow {
    position: absolute;
    top: 430px;
    &::before {
      color: red;
      font-size: 2.25rem;
    }
  }
  .slick-prev {
    left: 1075px;
  }
  .slick-next {
    right: 30px;
  }
`;
