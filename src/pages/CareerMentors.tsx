import { useState } from "react";
import FloatingNav from "@/components/FloatingNav";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { User, Linkedin, Twitter, Mail, Award, BookOpen } from "lucide-react";

interface Mentor {
    id: number;
    name: string;
    role: string;
    image: string;
    bio: string;
    expertise: string[];
    education: string;
    social: {
        linkedin?: string;
        twitter?: string;
        email?: string;
    };
}

const mentors: Mentor[] = [
    {
        id: 1,
        name: "Dr. Sarah Mitchell",
        role: "Senior Career Physiologist",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400",
        bio: "With over 15 years of experience in career counseling and psychology, Dr. Mitchell specializes in anxiety management and career transitions.",
        expertise: ["Career Anxiety", "Executive Coaching", "Transition Planning"],
        education: "Ph.D. in Psychology, Stanford University",
        social: { linkedin: "#", email: "sarah@example.com" }
    },
    {
        id: 2,
        name: "James Anderson",
        role: "Corporate Readiness Coach",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400",
        bio: "James brings a decade of corporate HR experience to help students and professionals understand exactly what employers are looking for.",
        expertise: ["Interview Preparation", "Resume Building", "Corporate Etiquette"],
        education: "MBA, Harvard Business School",
        social: { linkedin: "#", twitter: "#" }
    },
    {
        id: 3,
        name: "Priya Patel",
        role: "Skills Development Lead",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400",
        bio: "Priya is passionate about bridging the gap between academic learning and industry requirements through targeted skill workshops.",
        expertise: ["Technical Skills", "Soft Skills Training", "Workshop Facilitation"],
        education: "M.Ed. in Instructional Design",
        social: { linkedin: "#", email: "priya@example.com" }
    },
    {
        id: 4,
        name: "Marcus Johnson",
        role: "Study Abroad Consultant",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400",
        bio: "Marcus has guided hundreds of students to secure admissions in top universities across the globe.",
        expertise: ["International Admissions", "Visa Guidance", "Scholarship Hunting"],
        education: "MA in International Education",
        social: { linkedin: "#", twitter: "#", email: "marcus@example.com" }
    },
    {
        id: 5,
        name: "Elena Rodriguez",
        role: "Entrepreneurship Mentor",
        image: "https://images.unsplash.com/photo-1598550874175-4d7112ee7f1c?auto=format&fit=crop&q=80&w=400&h=400",
        bio: "Elena helps aspiring entrepreneurs invalidate their ideas, build business models, and pitch to investors.",
        expertise: ["Startup Strategy", "Pitching", "Business Modeling"],
        education: "MSc in Entrepreneurship",
        social: { linkedin: "#" }
    }
];

const CareerMentors = () => {
    const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);

    return (
        <div className="min-h-screen bg-background text-foreground pb-20">
            <FloatingNav />

            <div className="container mx-auto px-4 py-20 pt-24 sm:pt-32">
                <div className="text-center mb-16 animate-fade-in">
                    <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                        Meet Your <span className="text-golden">Career Mentors</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                        Expert guidance for your journey. Connect with professionals who can help you reach new heights.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
                    {mentors.map((mentor) => (
                        <div
                            key={mentor.id}
                            onClick={() => setSelectedMentor(mentor)}
                            className="glass-card p-6 rounded-2xl hover:border-primary/50 transition-all duration-300 group cursor-pointer animate-scale-in"
                        >
                            <div className="mb-6 relative mx-auto w-32 h-32 sm:w-40 sm:h-40">
                                <div className="absolute inset-0 bg-gradient-golden rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl" />
                                <img
                                    src={mentor.image}
                                    alt={mentor.name}
                                    className="w-full h-full object-cover rounded-full border-2 border-primary/20 group-hover:border-primary transition-colors duration-300"
                                />
                            </div>

                            <div className="text-center">
                                <h3 className="font-display text-xl font-bold mb-2 group-hover:text-golden transition-colors">
                                    {mentor.name}
                                </h3>
                                <p className="text-primary font-medium mb-3">{mentor.role}</p>
                                <p className="text-sm text-muted-foreground line-clamp-2">
                                    {mentor.bio}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Dialog open={!!selectedMentor} onOpenChange={(open) => !open && setSelectedMentor(null)}>
                <DialogContent className="glass-card border-primary/20 max-w-2xl">
                    {selectedMentor && (
                        <>
                            <DialogHeader>
                                <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
                                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-primary/20 shrink-0">
                                        <img
                                            src={selectedMentor.image}
                                            alt={selectedMentor.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <DialogTitle className="text-2xl sm:text-3xl font-display font-bold mb-2">
                                            {selectedMentor.name}
                                        </DialogTitle>
                                        <p className="text-primary text-lg font-medium mb-4">{selectedMentor.role}</p>
                                        <div className="flex flex-wrap gap-2 justify-center sm:justify-start mb-4">
                                            {selectedMentor.expertise.map((skill, index) => (
                                                <span key={index} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </DialogHeader>

                            <div className="space-y-6 mt-4">
                                <div>
                                    <h4 className="flex items-center gap-2 font-semibold text-foreground mb-2">
                                        <User className="w-4 h-4 text-golden" /> About
                                    </h4>
                                    <DialogDescription className="text-base text-muted-foreground">
                                        {selectedMentor.bio}
                                    </DialogDescription>
                                </div>

                                <div>
                                    <h4 className="flex items-center gap-2 font-semibold text-foreground mb-2">
                                        <BookOpen className="w-4 h-4 text-golden" /> Education
                                    </h4>
                                    <p className="text-sm text-muted-foreground">{selectedMentor.education}</p>
                                </div>

                                <div className="flex gap-4 pt-4 border-t border-white/10">
                                    {selectedMentor.social.linkedin && (
                                        <a href={selectedMentor.social.linkedin} className="text-muted-foreground hover:text-[#0077b5] transition-colors">
                                            <Linkedin className="w-5 h-5" />
                                        </a>
                                    )}
                                    {selectedMentor.social.twitter && (
                                        <a href={selectedMentor.social.twitter} className="text-muted-foreground hover:text-[#1DA1F2] transition-colors">
                                            <Twitter className="w-5 h-5" />
                                        </a>
                                    )}
                                    {selectedMentor.social.email && (
                                        <a href={`mailto:${selectedMentor.social.email}`} className="text-muted-foreground hover:text-golden transition-colors">
                                            <Mail className="w-5 h-5" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default CareerMentors;
