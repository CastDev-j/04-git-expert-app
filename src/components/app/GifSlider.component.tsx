import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface Gif {
    id: string;
    title: string;
    url: string;
}

interface EmblaCarouselProps {
    gifs: Gif[];
}

export function GifSlider({ gifs }: EmblaCarouselProps) {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay({
        delay: 5000
    })]);

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                {gifs.map((gif) => (
                    <div key={gif.id} className="embla__slide">
                        <img src={gif.url} alt={gif.title} />
                    </div>
                ))}
            </div>
        </div>
    );
}
