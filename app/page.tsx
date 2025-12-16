// app/page.tsx
import { Menu, Home, Sofa, Lightbulb, Ruler, ArrowRight, CheckCircle2, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image" // <-- IMPORT: Component Next.js Image

export default function InteriorDesignPage() {
  const projects = [
    {
      title: "Chambre d'Enfants Thème Spatial",
      description: "Design créatif et ludique avec décoration murale spatiale personnalisée.",
      image: "/images/api-attachments-4lwrivjy9hvdojqoup1vl.jpg",
      alt: "Chambre d'enfants moderne avec deux lits thème spatial décoration murale lune et astronaute",
    },
    {
      title: "Chambre Contemporaine Minimaliste",
      description: "Design épuré avec palette grise sophistiquée et mobilier sur mesure.",
      image: "/images/api-attachments-8kmjljsnclurkbziyojdc.jpg",
      alt: "Chambre contemporaine avec design minimaliste tons gris et décoration murale géométrique",
    },
    {
      title: "Villa de Luxe Moderne",
      description: "Architecture contemporaine spectaculaire avec piscine à cascades.",
      image: "/images/api-attachments-6d6qy1o81lgb21zwsff8m.jpg",
      alt: "Villa de luxe moderne avec piscine spectaculaire cascades et architecture contemporaine",
    },
    {
      title: "Cuisine Élégante",
      description: "Design de cuisine luxueuse avec îlot central et finitions premium.",
      // هذا الرابط خارجي، سيشتغل بفضل التعديل في next.config.js
      image: "https://storage.googleapis.com/v0-app-assets/api-attachments-d218c57t3d121c2r7t6d6.jpg",
      alt: "Cuisine luxueuse avec îlot central et luminaires dorés",
    },
  ]

  const services = [
    {
      icon: Sofa,
      title: "Conception d'Espaces",
      description: "Optimisation de l'agencement et création d'un design fonctionnel et esthétique.",
    },
    {
      icon: Lightbulb,
      title: "Conception d'Éclairage",
      description: "Planification d'un éclairage pour améliorer l'ambiance et la fonctionnalité.",
    },
    {
      icon: Ruler,
      title: "Plans 3D et Visualisation",
      description: "Création de rendus 3D pour visualiser le projet avant sa réalisation.",
    },
    {
      icon: CheckCircle2,
      title: "Sélection de Matériaux",
      description: "Choix de matériaux, de couleurs et de mobilier de haute qualité.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          <a href="#accueil" className="flex items-center space-x-2">
            {/* Image Component 1: Logo */}
            <Image
              src="/images/api-attachments-15mx82apvwz3j8a49ybha.jpg"
              alt="Fm Luxury Design Logo"
              width={100}
              height={48}
              className="h-12 w-auto"
              priority
            />
            <span className="text-2xl font-bold text-green-700 dark:text-yellow-400">Fluxury Design</span>
          </a>
          <nav className="hidden md:flex space-x-8">
            <a href="#accueil" className="hover:text-yellow-400 transition-colors">
              Accueil
            </a>
            <a href="#services" className="hover:text-yellow-400 transition-colors">
              Services
            </a>
            <a href="#projets" className="hover:text-yellow-400 transition-colors">
              Projets
            </a>
            <a href="#contact" className="hover:text-yellow-400 transition-colors">
              Contact
            </a>
          </nav>
          <Button variant="outline" className="hidden md:inline-flex bg-green-700 hover:bg-green-800 text-white dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:text-gray-900">
            <a href="#contact">Contactez-nous</a>
          </Button>
          <button className="md:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section id="accueil" className="relative h-[80vh] flex items-center justify-center text-center">
          <div className="absolute inset-0">
            {/* Image Component 2: Hero Image */}
            <Image
              src="/images/api-attachments-hasds3ylqum0hihroho00.jpg"
              alt="Design d'intérieur de luxe moderne avec des meubles sophistiqués et des accents dorés"
              fill
              className="w-full h-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gray-900/60" />
          </div>
          <div className="relative z-10 p-6 max-w-4xl text-white">
            <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 leading-tight">
              Design d'Intérieur de Luxe et Créatif
            </h1>
            <p className="text-lg sm:text-xl mb-8 font-light">
              Nous transformons les espaces en œuvres d'art fonctionnelles, mélangeant le design contemporain marocain avec
              une élégance intemporelle.
            </p>
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold transition-transform duration-300 hover:scale-[1.02]">
              <a href="#projets" className="flex items-center">
                Voir Nos Projets <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-green-700 dark:text-yellow-400 mb-4">Nos Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
              Nous offrons une gamme complète de services pour concrétiser votre vision, du concept initial à la réalisation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
                  <service.icon className="h-10 w-10 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="a-propos" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-2xl">
              {/* Image Component 3: About Image */}
              <Image
                src="/images/api-attachments-stram0opmpbf80ehollyg.jpg"
                alt="Photo de Mohammed Fhamni, Designer d'Intérieur"
                fill
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-green-700 dark:text-yellow-400 mb-4">À Propos de Mohammed Fhamni</h2>
              <h3 className="text-2xl font-semibold mb-6">Un designer passionné par la création d'espaces uniques.</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Basé à Casablanca, Mohammed Fhamni est un designer d'intérieur avec plus de 10 ans d'expérience dans la création d'environnements résidentiels et commerciaux sophistiqués. Sa philosophie repose sur l'équilibre entre l'esthétique, la fonctionnalité et l'identité culturelle.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Notre mission est de vous accompagner à travers chaque étape, en veillant à ce que le résultat final dépasse vos attentes et incarne l'essence du luxe moderne.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-green-700 dark:text-yellow-400">
                  <CheckCircle2 className="h-5 w-5 mr-2" />
                  <span>Approche personnalisée et orientée client</span>
                </div>
                <div className="flex items-center text-green-700 dark:text-yellow-400">
                  <CheckCircle2 className="h-5 w-5 mr-2" />
                  <span>Expertise en design durable et intelligent</span>
                </div>
                <div className="flex items-center text-green-700 dark:text-yellow-400">
                  <CheckCircle2 className="h-5 w-5 mr-2" />
                  <span>Maîtrise des dernières tendances de luxe</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projets" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-green-700 dark:text-yellow-400 mb-4">Nos Réalisations</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
              Découvrez une sélection de nos projets les plus marquants, de la villa contemporaine au design d'espace thématique.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-[1.02]">
                  <div className="relative h-64 overflow-hidden">
                    {/* Image Component 4: Project Image */}
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.alt}
                      fill
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 text-left">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400">{project.description}</p>
                    <a href="#" className="mt-4 inline-flex items-center text-yellow-400 hover:text-yellow-500 font-medium transition-colors">
                      En savoir plus <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" size="lg" className="mt-12 border-2 border-green-700 hover:bg-green-700 hover:text-white dark:border-yellow-400 dark:hover:bg-yellow-400 dark:hover:text-gray-900 transition-colors">
              <a href="#">Voir tous les projets</a>
            </Button>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-green-700 dark:bg-gray-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-yellow-400">Parlons de Votre Projet</h2>
              <p className="mb-8 text-green-200 dark:text-gray-300">
                Prêt à transformer votre espace ? Contactez-nous dès aujourd'hui pour une consultation gratuite et sans engagement.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div className="ml-3">
                    <p className="font-semibold">Email</p>
                    <a href="mailto:contact@fluxurydesign.com" className="text-green-200 dark:text-gray-400 hover:text-white transition-colors">
                      contact@fluxurydesign.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div className="ml-3">
                    <p className="font-semibold">Téléphone</p>
                    <a href="tel:+2126XXXXXXXX" className="text-green-200 dark:text-gray-400 hover:text-white transition-colors">
                      +212 6 XX XX XX XX
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Home className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div className="ml-3">
                    <p className="font-semibold">Bureau</p>
                    <p className="text-green-200 dark:text-gray-400">Casablanca, Maroc</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Envoyez-nous un message</h3>
              {/* NOTE IMPORTANTE: Ce formulaire est fonctionnel uniquement en UI. Pour l'activer, vous devez le connecter à un service backend ou une solution simple (Formspree/EmailJS). */}
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input type="text" placeholder="Votre Nom Complet" className="bg-gray-100 dark:bg-gray-700 border-none p-3 text-gray-900 dark:text-white" />
                  <Input type="email" placeholder="Votre Email" className="bg-gray-100 dark:bg-gray-700 border-none p-3 text-gray-900 dark:text-white" />
                </div>
                <Input type="text" placeholder="Sujet du Message" className="bg-gray-100 dark:bg-gray-700 border-none p-3 text-gray-900 dark:text-white" />
                <Textarea placeholder="Comment pouvons-nous vous aider ?" className="bg-gray-100 dark:bg-gray-700 border-none p-3 min-h-[150px] text-gray-900 dark:text-white" />
                <Button type="submit" size="lg" className="w-full bg-green-700 hover:bg-green-800 text-white dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:text-gray-900 font-semibold transition-transform duration-300 hover:scale-[1.01]">
                  Envoyer le Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div>
              <a href="#accueil" className="flex items-center space-x-2 mb-4">
                {/* Image Component 5: Footer Logo */}
                <Image
                  src="/images/api-attachments-15mx82apvwz3j8a49ybha.jpg"
                  alt="Fm Luxury Design Logo"
                  width={100}
                  height={48}
                  className="h-10 w-auto"
                />
                <span className="text-xl font-bold text-yellow-400">Fluxury Design</span>
              </a>
              <p className="text-gray-400 text-sm">
                Transformons votre espace en une déclaration de luxe et de fonctionnalité.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="mailto:contact@fluxurydesign.com" className="hover:text-yellow-400 transition-colors flex items-center">
                    <Mail className="h-4 w-4 mr-2" /> Email
                  </a>
                </li>
                <li>
                  <a href="tel:+2126XXXXXXXX" className="hover:text-yellow-400 transition-colors flex items-center">
                    <Phone className="h-4 w-4 mr-2" /> Tél: +212 6...
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Expertises</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-yellow-400 transition-colors">
                    Conception d'Espaces
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition-colors">
                    Plans 3D
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition-colors">
                    Sélection de Matériaux
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400 transition-colors">
                    Conception d'Éclairage
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Liens Rapides</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#accueil" className="hover:text-yellow-400 transition-colors">
                    Accueil
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-yellow-400 transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#projets" className="hover:text-yellow-400 transition-colors">
                    Projets
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-yellow-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-green-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Fluxury Design - Mohammed Fhamni • Créons ensemble quelque chose d'extraordinaire.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}