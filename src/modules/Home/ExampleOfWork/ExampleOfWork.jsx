import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { useSelector } from 'react-redux';
import { exampleOfWorkData } from '../../../data/exampleOfWork';

export default function ExampleOfWork() {
    const { titleExampleOfWork } = useSelector((state) => state.translations.translations)
    const lang = useSelector((state) => state.translations.language)
    return (
        <div
            style={{
                direction: lang == "en" ? "ltr" : "rtl"
            }}
            className='container mx-auto py-8 flex flex-col gap-14'
        >
            <h1 className='text-3xl font-bold'>
                {titleExampleOfWork}
            </h1>
            <Carousel
                height={200}
                slideGap="xl"
                controlsOffset="xs"
                controlSize={31}
                align="start"
                loop
                dragFree
                slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
            >
                {
                    exampleOfWorkData.map((item, index) => {
                        return (
                            <Carousel.Slide className='overflow-hidden' key={index}>
                                <div>
                                    <img
                                        className='w-full'
                                        src={item.image} />
                                    <div
                                        className='bg-[#EDF7FF] w-full p-6 flex flex-col gap-4'
                                    >
                                        <p
                                            className='text-2xl font-medium'
                                        >
                                            {item.title}
                                        </p>
                                        <p
                                            className='text-xs text-light'
                                        >
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </Carousel.Slide>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}
