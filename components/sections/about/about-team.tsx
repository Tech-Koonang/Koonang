import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { Linkedin, Mail, Globe } from "lucide-react";

export function AboutTeam() {
  const { t } = useLanguage();

  const teamMembers = [
    {
      name: "Ghilang Wishanggeni",
      role: "Chief Executive Officer",
      image: "/team/ghilang.jpg",
      bio: "Visionary leader driving strategic growth and innovation in digital architecture solutions.",
      linkedin: "#",
      email: "ghilang@koonang.io"
    },
    {
      name: "Dikdik Haris",
      role: "Lead Full-Stack Developer", 
      image: "/team/dikdik.jpeg",
      bio: "Expert in modern web technologies and cloud architecture solutions.",
      linkedin: "#",
      email: "dikdik@koonang.io"
    },
    {
      name: "Sarah Aprilia",
      role: "Business Strategy Consultant",
      image: "/team/sarah.jpeg", 
      bio: "Helping businesses transform through digital innovation and process automation.",
      linkedin: "#",
      email: "sarah@koonang.io"
    }
  ];

  return (
    <section className="py-32 bg-slate-50 dark:bg-navy-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-navy-900 dark:text-white mb-6">
            Meet Our Core Team
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 font-light max-w-3xl mx-auto">
            The minds behind koonang's innovative architecture solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white dark:bg-navy-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Image Container */}
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-firefly/10 to-tosca/10">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-firefly font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex gap-4">
                    <a
                      href={member.linkedin}
                      className="w-10 h-10 rounded-full bg-slate-100 dark:bg-navy-700 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-firefly hover:text-white transition-colors duration-300"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 rounded-full bg-slate-100 dark:bg-navy-700 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-firefly hover:text-white transition-colors duration-300"
                      aria-label={`${member.name} Email`}
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
