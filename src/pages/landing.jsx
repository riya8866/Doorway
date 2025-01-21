import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Link } from 'react-router-dom'
import companies from "../data/companies.json";
import faqs from "../data/faq.json";
import Autoplay from 'embla-carousel-autoplay';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@radix-ui/react-select';
import { Label } from '@radix-ui/react-label';
import { Input } from 'postcss';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';


const LandingPage = () => {
  return (
    <main className='flex flex-col  gap-10 sm:gap-20 py-10 sm:py-20'>
      {/* maintext */}
      <section className='text-center'>
        <h1 className='flex flex-col items-center justify-center gradient-title text-4xl font-extrabold sm:text-6xl lg:text-8xl tracking-tighter py-4'>
          Find Your Dream Job{" "}
          <span className="flex items-center gap-2 sm:gap-6">And Get Hired.
          </span>
          </h1>
          <p className="text-grey-100 sm:mt-4 text-xs sm:text-xl">
            Explore thousands of job listings or find the perfect candidate
          </p>
      </section>

      {/* buttons */}
      <div className='flex gap-6 justify-center'>
        <Link to="/jobs">
        <Button variant="blue" size="xl">Find Jobs</Button>
        </Link>
        <Link to="/post-job">
        <Button size="xl" variant="destructive">Post a Job</Button>
        </Link>
        </div>

        {/* carousel */}
        <div className='flex gap-6 justify-center'>
        <Carousel className="w-full py-10" plugins={[Autoplay({delay: 2000})]}>   
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
         {companies.map(({ name, id, path }) => (
        <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
          <img src={path} alt={name} className='h-9 sm:h-14 object-contain'/>
        </CarouselItem>
      ))}
      </CarouselContent>
      </Carousel>
      </div>

      {/* banner */}
      <img src="" className='w-full'/>

      {/* cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 w-3/4 mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="font-bold">For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            Search and apply for jobs, track applications, and more.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-bold">For Employers</CardTitle>
          </CardHeader>
          <CardContent>
            Post jobs, manage applications, and find the best candidates.
          </CardContent>
        </Card>
      </section>

      {/* Accordion */}

      <Accordion type="single" collapsible className="w-3/4 mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  )
}

export default LandingPage 