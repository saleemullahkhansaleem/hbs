"use client";

import { useState } from "react";
import { ImageIcon, Camera, Trophy, Calendar, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SportsEventsGallery() {
  const [activeGalleryTab, setActiveGalleryTab] = useState("sports");
  const [selectedImage, setSelectedImage] = useState(null);

  // Sample gallery data - in a real application, this would come from a database or API
  const galleryData = {
    sports: [
      {
        id: 1,
        src: "https://placehold.co/600x400",
        alt: "Cricket match",
        caption: "Annual cricket tournament",
      },
      {
        id: 2,
        src: "https://placehold.co/400x600",
        alt: "Football team",
        caption: "HBS football team",
      },
      {
        id: 3,
        src: "https://placehold.co/600x400",
        alt: "Table tennis competition",
        caption: "Inter-college table tennis championship",
      },
      {
        id: 4,
        src: "https://placehold.co/500",
        alt: "Sports day",
        caption: "Annual sports day celebrations",
      },
      {
        id: 5,
        src: "https://placehold.co/600x400",
        alt: "Basketball game",
        caption: "Basketball match against rival college",
      },
      {
        id: 6,
        src: "https://placehold.co/400x600",
        alt: "Volleyball match",
        caption: "Volleyball tournament finals",
      },
      {
        id: 7,
        src: "https://placehold.co/600x400",
        alt: "Athletics event",
        caption: "Track and field competition",
      },
      {
        id: 8,
        src: "https://placehold.co/500",
        alt: "Chess tournament",
        caption: "Inter-class chess championship",
      },
    ],
    events: [
      {
        id: 1,
        src: "https://placehold.co/600x400",
        alt: "Annual dinner",
        caption: "Annual dinner celebration",
      },
      {
        id: 2,
        src: "https://placehold.co/400x600",
        alt: "Cultural day",
        caption: "Cultural day festivities",
      },
      {
        id: 3,
        src: "https://placehold.co/600x400",
        alt: "Graduation ceremony",
        caption: "MBBS Graduation ceremony",
      },
      {
        id: 4,
        src: "https://placehold.co/500",
        alt: "Welcome party",
        caption: "Freshers' welcome party",
      },
      {
        id: 5,
        src: "https://placehold.co/600x400",
        alt: "Farewell party",
        caption: "Farewell for graduating batch",
      },
      {
        id: 6,
        src: "https://placehold.co/400x600",
        alt: "Seminar",
        caption: "Medical seminar with guest speakers",
      },
      {
        id: 7,
        src: "https://placehold.co/600x400",
        alt: "Workshop",
        caption: "Hands-on medical workshop",
      },
      {
        id: 8,
        src: "https://placehold.co/500",
        alt: "College day",
        caption: "College day celebrations",
      },
    ],
    competitions: [
      {
        id: 1,
        src: "https://placehold.co/600x400",
        alt: "Debate competition",
        caption: "Inter-college debate competition",
      },
      {
        id: 2,
        src: "https://placehold.co/400x600",
        alt: "Quiz competition",
        caption: "Medical quiz championship",
      },
      {
        id: 3,
        src: "https://placehold.co/600x400",
        alt: "Art competition",
        caption: "Student art competition",
      },
      {
        id: 4,
        src: "https://placehold.co/500",
        alt: "Science fair",
        caption: "Medical science exhibition",
      },
      {
        id: 5,
        src: "https://placehold.co/600x400",
        alt: "Essay competition",
        caption: "Essay writing contest winners",
      },
      {
        id: 6,
        src: "https://placehold.co/400x600",
        alt: "Talent show",
        caption: "Annual talent show performances",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Sports & Events Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Explore images from our sports competitions and college events
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Photo Gallery</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Browse through our collection of images showcasing student life,
                sports competitions, and college events
              </p>
            </div>

            <div className="flex justify-center mb-8">
              <div className="inline-flex rounded-md shadow-sm">
                <button
                  onClick={() => setActiveGalleryTab("sports")}
                  className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                    activeGalleryTab === "sports"
                      ? "bg-primary text-primary-muted"
                      : "bg-muted text-muted-foreground hover:bg-muted/50"
                  }`}
                >
                  Sports Week
                </button>
                <button
                  onClick={() => setActiveGalleryTab("events")}
                  className={`px-4 py-2 text-sm font-medium ${
                    activeGalleryTab === "events"
                      ? "bg-primary text-primary-muted"
                      : "bg-muted text-muted-foreground hover:bg-muted/50"
                  }`}
                >
                  College Events
                </button>
                <button
                  onClick={() => setActiveGalleryTab("competitions")}
                  className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                    activeGalleryTab === "competitions"
                      ? "bg-primary text-primary-muted"
                      : "bg-muted text-muted-foreground hover:bg-muted/50"
                  }`}
                >
                  Competitions
                </button>
              </div>
            </div>

            {activeGalleryTab === "sports" && (
              <div>
                <div className="mb-8">
                  <Card className="p-6">
                    <div className="flex items-center mb-4">
                      <Trophy className="h-6 w-6 text-primary mr-3" />
                      <h3 className="text-xl font-bold">
                        Sports Week and Indoor/Outdoor Games
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      HBS Medical & Dental College organizes an annual Sports
                      Week featuring various indoor and outdoor games. Students
                      participate enthusiastically in cricket, football,
                      volleyball, basketball, table tennis, badminton, and other
                      sports activities. These events promote physical fitness,
                      teamwork, and healthy competition among students.
                    </p>
                  </Card>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {galleryData.sports.map((image) => (
                    <div
                      key={image.id}
                      className="group relative overflow-hidden rounded-lg cursor-pointer"
                      onClick={() => openLightbox(image)}
                    >
                      <div className="aspect-[4/3] relative">
                        <img
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          className="object-cover h-full w-full transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                        <div className="p-4 w-full">
                          <p className="text-white font-medium">
                            {image.caption}
                          </p>
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
            )}

            {activeGalleryTab === "events" && (
              <div>
                <div className="mb-8">
                  <Card className="p-6">
                    <div className="flex items-center mb-4">
                      <Calendar className="h-6 w-6 text-primary mr-3" />
                      <h3 className="text-xl font-bold">College Events</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Throughout the academic year, HBS Medical & Dental College
                      hosts various events including annual dinners, cultural
                      days, graduation ceremonies, welcome parties for new
                      students, and farewell parties for graduating batches.
                      These events provide opportunities for students to
                      socialize, celebrate achievements, and create lasting
                      memories.
                    </p>
                  </Card>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {galleryData.events.map((image) => (
                    <div
                      key={image.id}
                      className="group relative overflow-hidden rounded-lg cursor-pointer"
                      onClick={() => openLightbox(image)}
                    >
                      <div className="aspect-[4/3] relative">
                        <img
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          className="object-cover h-full w-full transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                        <div className="p-4 w-full">
                          <p className="text-white font-medium">
                            {image.caption}
                          </p>
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
            )}

            {activeGalleryTab === "competitions" && (
              <div>
                <div className="mb-8">
                  <Card className="p-6">
                    <div className="flex items-center mb-4">
                      <Users className="h-6 w-6 text-primary mr-3" />
                      <h3 className="text-xl font-bold">
                        Out Campus Sport Competitions
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      Our students actively participate in sports competitions
                      held at various colleges under the umbrella of Shifa
                      university and other institutions. They have performed
                      exceptionally well in these competitions, winning in table
                      tennis, securing positions in futsal, and achieving
                      recognition in e-gaming. These competitions provide
                      valuable opportunities for students to showcase their
                      talents and represent HBS Medical & Dental College.
                    </p>
                  </Card>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {galleryData.competitions.map((image) => (
                    <div
                      key={image.id}
                      className="group relative overflow-hidden rounded-lg cursor-pointer"
                      onClick={() => openLightbox(image)}
                    >
                      <div className="aspect-[4/3] relative">
                        <img
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          className="object-cover h-full w-full transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                        <div className="p-4 w-full">
                          <p className="text-white font-medium">
                            {image.caption}
                          </p>
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
            )}
          </div>
        </div>
      </section>

      {/* Recent Achievements */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Recent Achievements</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Celebrating the success of our students in various competitions
              </p>
            </div>

            <Card className="p-8">
              <h3 className="text-xl font-bold mb-6">Sports Achievements</h3>
              <p className="text-muted-foreground mb-6">
                Our students participated in sports competitions of various
                colleges held under the umbrella of Shifa university and have
                performed exceptionally well.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4">Table Tennis</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                        <Trophy className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        <span className="font-medium">Boys Single:</span> Winner
                        and Runner-up positions
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                        <Trophy className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        <span className="font-medium">Boys Double:</span> Winner
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                        <Users className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        <span className="font-medium">Players:</span> Mujtaba
                        Zafar (5th year), Muhammad bin Khalid (4th year)
                      </p>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4">Other Sports</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                        <Trophy className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        <span className="font-medium">Futsal:</span> 3rd
                        position
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                        <Trophy className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        <span className="font-medium">E-gaming:</span> 2nd
                        position (Call of Duty and FIFA)
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                        <Users className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-muted-foreground">
                        <span className="font-medium">Players:</span> Muhammad
                        bin Khalid (4th year), Usama Khalid (3rd year)
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-6 bg-muted/50 rounded-lg">
                <h4 className="text-lg font-bold mb-4">Futsal Team Members</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                      <Users className="h-3 w-3 text-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      Umair Tahir (captain) (5th year)
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                      <Users className="h-3 w-3 text-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      Mujtaba Zafar (5th year)
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                      <Users className="h-3 w-3 text-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      Waleed Ghazanfar (4th year)
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                      <Users className="h-3 w-3 text-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      Asad Ullah (4th year)
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                      <Users className="h-3 w-3 text-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      Mesam Haider (4th year bds)
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                      <Users className="h-3 w-3 text-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      Hamza Umer (2nd year bds)
                    </p>
                  </li>
                </ul>
              </div>
            </Card>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="relative">
              <div className="relative w-full h-[70vh]">
                <img
                  src={selectedImage.src || "/placeholder.svg"}
                  alt={selectedImage.alt}
                  className="object-contain"
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
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/70"
          >
            Submit Your Photos
          </Button>
        </div>
      </section>
    </div>
  );
}
