import { useState } from "react";
import {
  ImageIcon,
  Camera,
  School,
  Trophy,
  Hospital,
  BookOpen,
  ChevronRight,
  X,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function MediaGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Sample gallery data - in a real application, this would come from a database or API
  const galleryData = {
    academics: [
      {
        id: 1,
        src: "https://placehold.co/400x600",
        alt: "Classroom lecture",
        caption: "Medical lecture in progress",
      },
      {
        id: 2,
        src: "https://placehold.co/600x400",
        alt: "Laboratory session",
        caption: "Students in anatomy lab",
      },
      {
        id: 3,
        src: "https://placehold.co/400x600",
        alt: "Library study",
        caption: "Students studying in the library",
      },
      {
        id: 4,
        src: "https://placehold.co/500",
        alt: "Graduation ceremony",
        caption: "MBBS Graduation ceremony 2023",
      },
      {
        id: 5,
        src: "https://placehold.co/400x600",
        alt: "Faculty lecture",
        caption: "Guest lecture by visiting professor",
      },
      {
        id: 6,
        src: "https://placehold.co/600x400",
        alt: "Student presentation",
        caption: "Student research presentation",
      },
    ],
    sports: [
      {
        id: 1,
        src: "https://placehold.co/400x600",
        alt: "Cricket match",
        caption: "Annual cricket tournament",
      },
      {
        id: 2,
        src: "https://placehold.co/600x400",
        alt: "Sports day",
        caption: "Sports day celebrations",
      },
      {
        id: 3,
        src: "https://placehold.co/400x600",
        alt: "Basketball game",
        caption: "Inter-college basketball match",
      },
      {
        id: 4,
        src: "https://placehold.co/500",
        alt: "Award ceremony",
        caption: "Sports awards ceremony",
      },
      {
        id: 5,
        src: "https://placehold.co/400x600",
        alt: "Football match",
        caption: "HBS football team in action",
      },
    ],
    hospital: [
      {
        id: 1,
        src: "https://placehold.co/400x600",
        alt: "Hospital building",
        caption: "HBS General Hospital main entrance",
      },
      {
        id: 2,
        src: "https://placehold.co/600x400",
        alt: "Operation theater",
        caption: "State-of-the-art operation theater",
      },
      {
        id: 3,
        src: "https://placehold.co/400x600",
        alt: "Dental clinic",
        caption: "HBS Dental Hospital",
      },
      {
        id: 4,
        src: "https://placehold.co/500",
        alt: "Patient care",
        caption: "Dedicated patient care services",
      },
      {
        id: 5,
        src: "https://placehold.co/400x600",
        alt: "Medical equipment",
        caption: "Advanced medical equipment",
      },
      {
        id: 6,
        src: "https://placehold.co/600x400",
        alt: "Hospital ward",
        caption: "Well-equipped hospital ward",
      },
      {
        id: 7,
        src: "https://placehold.co/400x600",
        alt: "Emergency department",
        caption: "24/7 Emergency services",
      },
    ],
    workshops: [
      {
        id: 1,
        src: "https://placehold.co/400x600",
        alt: "Medical workshop",
        caption: "Workshop on emergency medicine",
      },
      {
        id: 2,
        src: "https://placehold.co/600x400",
        alt: "Dental workshop",
        caption: "Dental procedures workshop",
      },
      {
        id: 3,
        src: "https://placehold.co/400x600",
        alt: "Research seminar",
        caption: "Research methodology seminar",
      },
      {
        id: 4,
        src: "https://placehold.co/500",
        alt: "Conference",
        caption: "Annual medical conference",
      },
    ],
  };

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 bg-muted/50 w-full overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4 relative h-full flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-foreground/20 backdrop-blur-sm mb-4">
            <ImageIcon className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Media Gallery</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Explore our collection of images showcasing life at HBS
          </p>
        </div>
      </section>

      {/* Gallery Categories */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <CategoryCard
                icon={School}
                title="Academics"
                description="View images related to academics"
                count={galleryData.academics.length}
                category="academics"
              />
              <CategoryCard
                icon={Trophy}
                title="Sports & Events"
                description="View images related to Sports & Events"
                count={galleryData.sports.length}
                category="sports"
              />
              <CategoryCard
                icon={Hospital}
                title="Hospital"
                description="View images related to our hospital"
                count={galleryData.hospital.length}
                category="hospital"
              />
              <CategoryCard
                icon={BookOpen}
                title="Workshops"
                description="View images related to workshops and seminars"
                count={galleryData.workshops.length}
                category="workshops"
              />
            </div>

            <Tabs defaultValue="academics" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
                <TabsTrigger value="academics">Academics</TabsTrigger>
                <TabsTrigger value="sports">Sports & Events</TabsTrigger>
                <TabsTrigger value="hospital">Hospital</TabsTrigger>
                <TabsTrigger value="workshops">Workshops</TabsTrigger>
              </TabsList>

              <TabsContent value="academics">
                <GallerySection
                  title="Academic Life"
                  description="Explore images from our classrooms, laboratories, and academic events"
                  images={galleryData.academics}
                  openLightbox={openLightbox}
                />
              </TabsContent>

              <TabsContent value="sports">
                <GallerySection
                  title="Sports & Events"
                  description="Highlights from our sports competitions and campus events"
                  images={galleryData.sports}
                  openLightbox={openLightbox}
                />
              </TabsContent>

              <TabsContent value="hospital">
                <GallerySection
                  title="Hospital Facilities"
                  description="Take a visual tour of our state-of-the-art hospital facilities"
                  images={galleryData.hospital}
                  openLightbox={openLightbox}
                />
              </TabsContent>

              <TabsContent value="workshops">
                <GallerySection
                  title="Workshops & Seminars"
                  description="Images from our professional development workshops and seminars"
                  images={galleryData.workshops}
                  openLightbox={openLightbox}
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
              aria-label="Close lightbox"
            >
              <X className="h-8 w-8" />
            </button>

            <div className="relative">
              <div className="relative w-full h-[70vh]">
                <img
                  src={selectedImage.src || "https://placehold.co/"}
                  alt={selectedImage.alt}
                  className="object-contain h-full mx-auto"
                />
              </div>
              <div className="bg-background p-4 text-center">
                <p className="text-lg font-medium">{selectedImage.caption}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Share Your Memories</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Are you an alumnus or current student with photos to share? We'd
            love to feature them in our gallery.
          </p>
          <Button
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            Submit Your Photos
          </Button>
        </div>
      </section>
    </div>
  );
}

function CategoryCard({ icon: Icon, title, description, count, category }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">{count} images</span>
          <Button variant="ghost" size="sm" className="group" asChild>
            <a href={`#${category}`}>
              VIEW ALL
              <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
}

function GallerySection({ title, description, images, openLightbox }) {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-lg cursor-pointer"
            onClick={() => openLightbox(image)}
          >
            <div className="aspect-square relative">
              <img
                src={image.src || "https://placehold.co/"}
                alt={image.alt}
                className="object-cover w-full h-full transition-transform group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
              <div className="p-4 w-full">
                <p className="text-white font-medium">{image.caption}</p>
                <div className="flex items-center mt-2">
                  <Camera className="h-4 w-4 text-white/80 mr-1" />
                  <span className="text-xs text-white/80">
                    Click to enlarge
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
