import { Education, Experience, Hobby, Language, PersonalDetails, Skill } from '@/type'
import React from 'react'
import Image from 'next/image'
import { BriefcaseBusiness, GraduationCap, Mail, MapPinCheck, Phone, Star } from 'lucide-react'
type Props = {
        personnalDetails: PersonalDetails
        file: File | any
        theme: string
        experiences: Experience[]
        educations: Education[]
        languages: Language[]
        hobbies:Hobby[]
        skills:Skill[]
        download:boolean
        ref?:any
}


function formatDate(dateString: string): string {
        const date = new Date(dateString);
        const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
        return date.toLocaleDateString('fr-FR', options);
}

const getStarRating = (proficiency: string) => {
        const maxStars = 5;
        let filledStars = 0;

        switch (proficiency) {
                case 'Débutant':
                        filledStars = 1;
                        break;
                case 'Intermédiaire':
                        filledStars = 3;
                        break;
                case 'Avancé':
                        filledStars = 5;
                        break;
                default:
                        filledStars = 0;

        }
        return (
                <>
                        {Array.from({ length: filledStars }, (_, index) => (
                                <Star key={index} className={`text-primary `} />
                        ))}
                        {Array.from({ length: maxStars - filledStars }, (_, index) => (
                                <Star key={index + filledStars} className="text-gray-300" />
                        ))}
                </>
        );



}

const CVPreview: React.FC<Props> = (props: Props) => {


        return (
                <div    ref={props.ref}
                        className={`flex  p-16 w-[950px] h-[1200px] shadow-lg ${props.download ? 'mb-10' : ""}`}
                        data-theme={props.theme}
                >
                        <div
                                className='flex flex-col w-1/3'
                        >
                                <div
                                        className='h-80 rounded-full border-8 overflow-hidden border-primary'
                                >
                                        {props.file && (
                                                < Image
                                                        src={URL.createObjectURL(props.file)}
                                                        alt="Picture of the author"
                                                        width={500}
                                                        height={500}

                                                        onLoadingComplete={() => {
                                                                if (typeof props.file !== "string") {
                                                                        URL.revokeObjectURL(URL.createObjectURL(props.file))
                                                                }
                                                        }}
                                                        className='w-full h-full rounded-lg object-cover '
                                                />
                                        )}
                                </div>
                                <div
                                        className='mt-4 flex-col w-full'
                                >
                                        <div>
                                                <h1 className='uppercase font-bold my-2'>
                                                        Contact
                                                </h1>
                                                <ul
                                                        className='space-y-2'
                                                >
                                                        <li
                                                                className='flex'
                                                        >
                                                                <div
                                                                        className='break-all text-sm relative'
                                                                >
                                                                        <div
                                                                                className='ml-8'
                                                                        >
                                                                                {props.personnalDetails.email}
                                                                        </div>

                                                                        {props.personnalDetails.email && (
                                                                                <div
                                                                                        className='absolute left-0 top-0'
                                                                                >
                                                                                        <Mail className='w-5 text-primary' />
                                                                                </div>
                                                                        )}

                                                                </div>
                                                        </li>
                                                        <li
                                                                className='flex'
                                                        >
                                                                <div
                                                                        className='break-all text-sm relative'
                                                                >
                                                                        <div
                                                                                className='ml-8'
                                                                        >
                                                                                {props.personnalDetails.phone}
                                                                        </div>

                                                                        {props.personnalDetails.phone && (
                                                                                <div
                                                                                        className='absolute left-0 top-0'
                                                                                >
                                                                                        <Phone className='w-5 text-primary' />
                                                                                </div>
                                                                        )}

                                                                </div>
                                                        </li>
                                                        <li
                                                                className='flex'
                                                        >
                                                                <div
                                                                        className='break-all text-sm relative'
                                                                >
                                                                        <div
                                                                                className='ml-8'
                                                                        >
                                                                                {props.personnalDetails.address}
                                                                        </div>

                                                                        {props.personnalDetails.address && (
                                                                                <div
                                                                                        className='absolute left-0 top-0'
                                                                                >
                                                                                        <MapPinCheck className='w-5 text-primary' />
                                                                                </div>
                                                                        )}

                                                                </div>
                                                        </li>
                                                </ul>
                                        </div>


                                        {/* les competences  */}
                                        <div
                                                className='mt-6'
                                        >
                                                <h1 className='uppercase font-bold my-2'>
                                                        Competences
                                                </h1>
                                                <div
                                                        className='flex flex-wrap gap-2'
                                                >
                                                        {
                                                                props.skills.map((skill) => (
                                                                        <p
                                                                        key={skill.name}
                                                                        className='badge badge-primary uppercase'
                                                                        >
                                                                                {skill.name}
                                                                        </p>
                                                                ))
                                                        }

                                                </div>

                                        </div>


                                         {/* preview de la langue  */}

                                        <div
                                                className='mt-6'
                                        >
                                                <h1 className='uppercase font-bold my-2'>
                                                        Langue
                                                </h1>
                                                <div
                                                        className='flex flex-col'
                                                >
                                                        {
                                                                props.languages.map((lang) => (
                                                                        <div
                                                                                key={lang.id}
                                                                        >
                                                                                <span
                                                                                        className='capitalize font-semibold space-y-2'
                                                                                >
                                                                                        {lang.language}
                                                                                </span>
                                                                                <div
                                                                                        className='flex mt-2'
                                                                                >
                                                                                        {getStarRating(lang.proficiency)}
                                                                                </div>
                                                                        </div>
                                                                ))
                                                        }

                                                </div>

                                        </div>

                                        {/* les loisirs */}


                                        <div
                                                className='mt-6'
                                        >
                                                <h1 className='uppercase font-bold my-2'>
                                                        Loisirs
                                                </h1>
                                                <div
                                                        className='flex flex-col'
                                                >
                                                        {
                                                                props.hobbies.map((hobb, index) => (
                                                                        <div key={index}>
                                                                                <span
                                                                                className='capitalize'
                                                                                >
                                                                                        {hobb.name}
                                                                                </span>
                                                                        </div>
                                                                ))
                                                        }

                                                </div>

                                        </div>
                                </div>
                        </div>
                        <div
                                className='w-2/3 ml-8'
                        >
                                <div
                                        className='w-full flex-col space-y-4'
                                >
                                        <h1
                                                className='uppercase text-xl'
                                        >
                                                {props.personnalDetails.fullName}
                                        </h1>
                                        <h2 className='text-5xl uppercase text-primary font-bold'>
                                                {props.personnalDetails.postSeeking}
                                        </h2>
                                        <p
                                                className='breack-all w-full text-sm'
                                        >
                                                {props.personnalDetails.description}
                                        </p>
                                </div>
                                <section
                                        className='w-full h-fit p-5'
                                >
                                        <div>
                                                <h1
                                                        className='uppercase font-bold mb-2'
                                                >
                                                        Experiences
                                                </h1>
                                                <ul
                                                        className='steps steps-vertical space-y-3'
                                                >
                                                        {props.experiences.map((exp, index) => (
                                                                <li
                                                                        key={index}
                                                                        className='step step-primary'
                                                                >
                                                                        <div
                                                                                className='text-left'
                                                                        >
                                                                                <h2
                                                                                        className='flex text-md uppercase font-bold'
                                                                                >
                                                                                        <BriefcaseBusiness className='w-5' />
                                                                                        <span className='ml-2'>{exp.jobTitle}</span>
                                                                                </h2>
                                                                                <div
                                                                                        className='text-sm my-2'
                                                                                >
                                                                                        <span
                                                                                                className='badge badge-primary'
                                                                                        >
                                                                                                {exp.companyName}
                                                                                        </span>
                                                                                        <span
                                                                                                className='italic ml-2'
                                                                                        >
                                                                                                {formatDate(exp.startDate)} au {formatDate(exp.endDate)}
                                                                                        </span>

                                                                                </div>
                                                                                <p
                                                                                        className='text-sm'
                                                                                >
                                                                                        {exp.description}
                                                                                </p>
                                                                        </div>
                                                                </li>
                                                        ))}
                                                </ul>
                                        </div>


                                        <div
                                                className='mt-'
                                        >
                                                <h1
                                                        className='uppercase font-bold mb-2'
                                                >
                                                        Formations
                                                </h1>
                                                <ul
                                                        className='steps steps-vertical space-y-3'
                                                >
                                                        {props.educations.map((edu, index) => (
                                                                <li
                                                                        key={index}
                                                                        className='step step-primary'
                                                                >
                                                                        <div
                                                                                className='text-left'
                                                                        >
                                                                                <h2
                                                                                        className='flex text-md uppercase font-bold'
                                                                                >
                                                                                        <GraduationCap className='w-5' />
                                                                                        <span className='ml-2'>{edu.degree}</span>
                                                                                </h2>
                                                                                <div
                                                                                        className='text-sm my-2'
                                                                                >
                                                                                        <span
                                                                                                className='badge badge-primary'
                                                                                        >
                                                                                                {edu.school}
                                                                                        </span>
                                                                                        <span
                                                                                                className='italic ml-2'
                                                                                        >
                                                                                                {formatDate(edu.startDate)} au {formatDate(edu.endDate)}
                                                                                        </span>

                                                                                </div>
                                                                                <p
                                                                                        className='text-sm'
                                                                                >
                                                                                        {edu.description}
                                                                                </p>
                                                                        </div>
                                                                </li>
                                                        ))}
                                                </ul>
                                        </div>

                                </section>
                        </div>
                </div>
        )
}

export default CVPreview