export const TITLE = {
  title: "Marta bra",
  subtitle: "белье ручной работы",
  about: `Marta bra - это российский бренд нижнего белья. Мы шьём красивое и 
                качественное белье, в котором женщинам не нужно отказываться от комфорта,
                чтобы выглядеть сексуально каждый день. Естественная красота и женственность
                лежит в основе нашего вдохновения, поэтому у нас вы не найдете плотных push-up чашек.
                Но мы поможем подобрать модель, чтобы подчеркнуть талию, скрыть беда или 
                визуально увеличить грудь`,
  
};

export const SEO = {
  title: "Мартабра ",
  description:
    "Кружевное нижнее белье ручной работы на заказ. Пошив нижнего белья по индивидуальным меркам.",
  openGraph: {
    type: "website",
    url: "https://martabra.belvedersky.now.sh",
    title: " Мартабра Кружевное нижнее белье ручной работы на заказ",
    description: " Пошив нижнего белья по индивидуальным меркам.",
    image: "https://martabra.belvedersky.now.sh/bra.jpg'"
  }
};
const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
};
export const DEVICE = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};
