import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X, Camera, Eye, ArrowRight, Play, Images, Maximize2, Star } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: '/gallery/AirTransport1.webp',
      title: 'Air Freight Loading',
      description: 'Cargo aircraft being loaded at the airport, ensuring timely global deliveries.',
      category: 'Air Freight',
      gradient: 'secondary'
    },
    {
      src: '/gallery/RoadTransport2.webp',
      title: 'Highway Freight',
      description: 'Efficient road freight services for nationwide distribution.',
      category: 'Road Transport',
      gradient: 'from-primary to-secondary'
    },
    {
      src: '/gallery/Land1.webp',
      title: 'Container Yard',
      description: 'Secure and organized land-based container storage for smooth operations.',
      category: 'Land Transport',
      gradient: 'from-accent to-primary'
    },
    {
      src: '/gallery/SeaTransport1.webp',
      title: 'Port Operations',
      description: 'Container shipping and handling services at major seaports.',
      category: 'Sea Freight',
      gradient: 'from-accent to-secondary'
    },
    {
      src: '/gallery/RoadTransport1.webp',
      title: 'Heavy Equipment Logistics',
      description: 'Specialized road transport for heavy machinery and oversized cargo.',
      category: 'Road Transport',
      gradient: 'from-secondary to-primary'
    },
    {
      src: '/gallery/AirTransport2.webp',
      title: 'Air Cargo Operations',
      description: 'Efficient ground handling and air cargo management for international shipments.',
      category: 'Air Freight',
      gradient: 'from-secondary to-accent'
    },
    {
      src: '/gallery/SeaTransport2.webp',
      title: 'Maritime Cargo',
      description: 'Global sea freight solutions with reliable cargo shipping services.',
      category: 'Sea Freight',
      gradient: 'from-secondary to-primary'
    },
    {
      src: '/gallery/Land2.webp',
      title: 'Truck Loading',
      description: 'Reliable truck fleet ensuring safe and timely inland transport.',
      category: 'Land Transport',
      gradient: 'from-primary to-accent'
    }
  ];


  const categories = [
    { name: 'All', count: galleryImages.length },
    { name: 'Air Freight', count: galleryImages.filter(img => img.category === 'Air Freight').length },
    { name: 'Sea Freight', count: galleryImages.filter(img => img.category === 'Sea Freight').length },
    { name: 'Facilities', count: galleryImages.filter(img => img.category === 'Facilities').length },
    { name: 'Operations', count: galleryImages.filter(img => img.category === 'Operations').length }
  ];

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center h-[100vh] w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1595773382291-06d1b6cbc43b?q=80&w=858&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        {/* dark overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/30" />

        {/* centered content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-6xl mx-auto w-full">
          <br /><br />

          {/* Badge */}
          <div className="mb-6">
            <span className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-xs sm:text-sm text-white">
              <Camera className="mr-2 h-4 w-4" />
              Visual Gallery
            </span>
          </div>

          {/* Main Heading */}
          <div className="mb-6">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Our Operations&nbsp;
              <span className="text-white">In Pictures</span>
            </h1>
          </div>

          {/* Description */}
          <div className="mb-8">
            <p className="max-w-2xl text-base sm:text-lg text-white/80 mx-auto">
              Take a visual journey through our state-of-the-art facilities, professional team, and comprehensive logistics operations
            </p>
          </div>

          {/* Stats Section */}
          <div className="mb-8 w-full max-w-4xl">
            <div className="rounded-lg bg-white/5 backdrop-blur-sm">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-6">
                <div className="text-center text-white">
                  <div className="text-4xl font-bold mb-2">15+</div>
                  <div className="text-white/80 text-sm">Years of Service</div>
                </div>
                <div className="text-center text-white">
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <div className="text-white/80 text-sm">Monthly Shipments</div>
                </div>
                <div className="text-center text-white">
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <div className="text-white/80 text-sm">Global Partners</div>
                </div>
                <div className="text-center text-white">
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <div className="text-white/80 text-sm">Customer Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Categories */}
      <section className="py-8 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-100 to-whiterelative"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary/10 text-primary-custom px-6 py-3 rounded-full text-sm font-medium mb-6">
              <Images className="w-4 h-4 mr-2" />
              Browse Categories
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-custom mb-6">
              Explore Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Browse through different categories of our logistics operations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto mb-16">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant="outline"
                className="h-auto py-4 px-6 border-2 hover:bg-primary hover:text-white hover:border-accent transition-all duration-300 group"
              >
                <div className="text-center">
                  <div className="font-semibold">{category.name}</div>
                  <div className="text-xs opacity-70 group-hover:opacity-100">
                    {category.count} {category.count === 1 ? 'image' : 'images'}
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-gradient-to-br from-neutral via-gray-50 to-blue-50 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {galleryImages.map((image, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden hover:-translate-y-2"
                onClick={() => setSelectedImage(index)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Category Badge */}
                    <div className={`absolute top-4 left-4 px-3 py-1 bg-primary text-white text-xs font-medium rounded-full`}>
                      {image.category}
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                          <Maximize2 className="w-8 h-8" />
                        </div>
                        <p className="text-sm font-medium">Click to view</p>
                      </div>
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="font-bold text-lg mb-2">{image.title}</h3>
                      <p className="text-sm opacity-90 leading-relaxed">{image.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-transparent"></div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary/10 text-primary-custom px-6 py-3 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Why Choose ECS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-custom mb-6">
              Excellence in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              What makes ECS Seychelles the preferred logistics partner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Camera,
                title: 'Modern Facilities',
                description: 'State-of-the-art equipment and infrastructure',
                gradient: 'from-primary to-secondary'
              },
              {
                icon: Eye,
                title: 'Professional Team',
                description: 'Experienced logistics professionals',
                gradient: 'from-accent to-primary'
              },
              {
                icon: Play,
                title: 'Advanced Operations',
                description: 'Cutting-edge logistics processes',
                gradient: 'from-secondary to-accent'
              },
              {
                icon: Images,
                title: 'Quality Service',
                description: 'Commitment to excellence in every shipment',
                gradient: 'from-primary to-accent'
              }
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 text-center">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>

                    <h3 className="text-xl font-semibold text-primary-custom mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div className="relative max-w-6xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute -top-16 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                <X className="w-6 h-6" />
              </div>
            </button>

            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].title}
                className="max-w-full max-h-[70vh] object-contain"
              />

              {/* Image Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white bg-gradient-to-t from-black/80 to-transparent">
                <div className={`inline-block px-3 py-1 bg-primary text-white text-sm font-medium rounded-full mb-4`}>
                  {galleryImages[selectedImage].category}
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  {galleryImages[selectedImage].title}
                </h3>
                <p className="text-gray-200 text-lg">
                  {galleryImages[selectedImage].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-b from-white via-accent to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-transparent"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Eye className="w-4 h-4 mr-2" />
            Experience the Difference
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience Our Services?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            See the quality and professionalism that makes ECS Seychelles the preferred logistics partner
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg group"
            >
              <span className="flex items-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
