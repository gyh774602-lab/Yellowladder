import { useState } from "react";
import FloatingNav from "@/components/FloatingNav";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { User, BookOpen } from "lucide-react";
import mentor1 from "@/assets/mentor1.png";
import mentor2 from "@/assets/mentor2.png";
import mentor3 from "@/assets/mentor3.png";
import mentor4 from "@/assets/mentor4.png";
import mentor5 from "@/assets/mentor5.png";
import mentor6 from "@/assets/mentor6.png";

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
        name: "Rajesh R S",
        role: "Career Counsellor & Corporate Trainer",
        image: mentor1,
        bio: "Rajesh R S brings more than 16 years of rich experience across corporate, training, and career counselling domains. He has a deep understanding of workplace expectations, skill gaps, and the real challenges individuals face while planning their careers. His mission is to help every learner recognise their true potential, make informed choices, and move forward with courage.",
        expertise: ["Employability Skills", "Career Guidance", "Communication & Personality Development"],
        education: "16+ Years Experience",
        social: { linkedin: "#", email: "rajesh@example.com" }
    },
    {
        id: 2,
        name: "Vidhya Conceicoe",
        role: "Career Counsellor & Soft Skills Trainer",
        image: mentor2,
        bio: "A results-driven Career Counsellor and Soft Skills Trainer with a strong passion for guiding students and professionals toward informed career decisions and workplace success. Experienced in career assessment, goal setting, resume building, interview preparation, and employability skill development. Committed to lifelong learning and empowering individuals to unlock their potential.",
        expertise: ["Career Assessment", "Resume Building", "Interview Preparation", "Soft Skills"],
        education: "Soft Skills Specialist",
        social: { linkedin: "#" }
    },
    {
        id: 3,
        name: "Haritha Nair",
        role: "Corporate Trainer & Career Counsellor",
        image: mentor3,
        bio: "Haritha Nair is a Corporate Trainer and Career Counsellor with Yellow Ladder, dedicated to helping people build meaningful, future-ready careers. She has facilitated numerous programs for colleges and corporates, specializing in communication skills, interview readiness, leadership, and personal effectiveness. At Yellow Ladder, she continues to champion growth, resilience, and lifelong learning.",
        expertise: ["Communication Skills", "Interview Readiness", "Leadership", "Personal Effectiveness"],
        education: "Corporate Training Expert",
        social: { linkedin: "#" }
    },
    {
        id: 4,
        name: "Jiju K",
        role: "L&D Professional & Career Counsellor",
        image: mentor4,
        bio: "A strategic and results-driven Learning and Development professional with over two decades of experience in the Banking and Financial Services Industry. Specializes in designing and delivering high-impact training programs. Adept at mentoring individuals on career planning, employability skills, leadership readiness, and personal effectiveness.",
        expertise: ["Career Planning", "Employability Skills", "Leadership Readiness"],
        education: "20+ Years Experience",
        social: { linkedin: "#" }
    },
    {
        id: 5,
        name: "Aswin Chandran C",
        role: "Learning & Development Professional",
        image: mentor5,
        bio: "A seasoned learning and development professional with over 7.5 years of experience delivering high-impact training programs to students, graduates, and working professionals. Specializes in bridging the gap between academics and industry through structured Campus to Corporate transition programs. The approach focuses on measurable outcomes and long-term skill development.",
        expertise: ["Soft Skills", "Employability Aptitude", "Design Thinking", "Data Analytics"],
        education: "7.5+ Years Experience",
        social: { linkedin: "#" }
    },
    {
        id: 6,
        name: "Resmi R Chandran",
        role: "Employability Skills Trainer",
        image: mentor6,
        bio: "Resmi R Chandran is an Employability Skills Trainer and practicing Career Counsellor with over three years of experience delivering youth-focused skilling and career guidance programs. She works closely with first-generation and underserved learners, enabling them to build confidence, career clarity, and sustainable employability.",
        expertise: ["Communication Skills", "Workplace Readiness", "Student Mentoring"],
        education: "3+ Years Experience",
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

                            </div>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default CareerMentors;
