"use client"

import { Eye, RotateCw, Save } from "lucide-react";
import Image from "next/image";
import PersonalDetailsForm from "./Components/personalDetailsForm";
import { useEffect, useRef, useState } from "react";
import { Education, Experience, Hobby, Language, PersonalDetails, Skill } from "@/type";
import { educationsPreset, experiencesPreset, hobbiesPreset, languagesPreset, personalDetailsPreset, skillsPreset } from "@/presset";
import CVPreview from "./Components/CVPreview";
import ExperiencesForm from "./Components/ExperiencesForm";
import EducationForm from "./Components/EducationForm";
import LanguageForm from "./Components/LanguageForm";
import SkillForms from "./Components/SkillForms";
import HobbiesForm from "./Components/HobbiesForm";
import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";
import confetti from 'canvas-confetti'

export default function Home() {

        const [personalDetails, setPersonalDetails] = useState<PersonalDetails>(personalDetailsPreset)
        const [file, setFile] = useState<File | null>(null)
        const [theme, setTheme] = useState<string>("business")
        const [experiences, setExperiences] = useState<Experience[]>(experiencesPreset)
        const [educations, setEducations] = useState<Education[]>(educationsPreset)
        const [language, setLanguage] = useState<Language[]>(languagesPreset)
        const [skills, setSkills] = useState<Skill[]>(skillsPreset)
        const [hobbies, setHobbies] = useState<Hobby[]>(hobbiesPreset)
        const [zoom, setZoom] = useState<number>(163)

        useEffect(() => {
                const defaultImageUrl = '/profile.jpg'
                fetch(defaultImageUrl)
                        .then((res) => res.blob())
                        .then((blob) => {
                                const defaultFile = new File([blob], "profile.jpg", { type: blob.type })

                                setFile(defaultFile)

                        })
        }, [])

        const themes = [
                "light",
                "dark",
                "cupcake",
                "bumblebee",
                "emerald",
                "corporate",
                "synthwave",
                "retro",
                "cyberpunk",
                "valentine",
                "halloween",
                "garden",
                "forest",
                "aqua",
                "lofi",
                "pastel",
                "fantasy",
                "wireframe",
                "black",
                "luxury",
                "dracula",
                "cmyk",
                "autumn",
                "business",
                "acid",
                "lemonade",
                "night",
                "coffee",
                "winter",
                "dim",
                "nord",
                "sunset",
        ]

        const handleResetPersonalDetails = () => setPersonalDetails(
                {
                        fullName: '',
                        email: '',
                        phone: '',
                        address: '',
                        photoUrl: '',
                        postSeeking: '',
                        description: ''
                }
        )
        const handleResetExperiences = () => setExperiences([])
        const handleResetEducation = () => setEducations([])
        const handleResetLanguage = () => setLanguage([])
        const handleResetSkills = () => setSkills([])
        const handleResetHobbies = () => setHobbies([])
        const cvPreviewRef = useRef(null)

        const handleDownloadPdf = async () => {
                const element = cvPreviewRef.current
                if (element) {
                        try {

                                const canvas = await html2canvas(element, {
                                        scale: 3,
                                        useCORS: true,
                                })
                                const imgData = canvas.toDataURL('image/png')

                                const pdf = new jsPDF({
                                        orientation: "portrait",
                                        unit: 'mm',
                                        format: "A4"
                                })

                                const pdfWidth = pdf.internal.pageSize.getWidth()
                                const pdfHeight = (canvas.height * pdfWidth) / canvas.width

                                pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
                                pdf.save(`cv.pdf`)

                                const modal = document.getElementById('my_modal_3') as HTMLDialogElement
                                if (modal) {
                                        modal.close()
                                }

                                confetti({
                                        particleCount: 100,
                                        spread: 70,
                                        origin: { y: 0.6 },
                                        zIndex: 9999
                                })

                        } catch (error) {
                                console.error('Erreur lors de la génération du PDF :', error);
                        }
                }
        }

        return (
                <div>
                        <div className="hidden lg:block">
                                <section className="flex items-center h-screen overflow-hidden">

                                        {/* voci le formulaire de l'application  */}
                                        <div className="w-1/3 h-full p-10 bg-base-200 scrollable  no-scrollbar">
                                                <div
                                                        className="mb-4 flex justify-between items-center">
                                                        <h1 className="text-2xl font-bold italic">
                                                                CV <span className="text-primary">Builder</span>
                                                        </h1>
                                                        <button
                                                                className="btn btn-primary"
                                                                onClick={() => (document.getElementById('my_modal_3') as HTMLDialogElement).showModal()}>
                                                                Previsualiser
                                                                <Eye className="w-4" />
                                                        </button>

                                                </div>
                                                <div
                                                        className="flex flex-col gap-6 rounded-lg"
                                                >
                                                        <div
                                                                className="flex justify-between items-center"
                                                        >
                                                                <h1
                                                                        className="badge badge-primary badge-outline"
                                                                >
                                                                        Qui etes-vous?
                                                                </h1>
                                                                <button
                                                                        onClick={handleResetPersonalDetails}
                                                                        className="btn btn-primary btn-sm"
                                                                >
                                                                        <RotateCw className="w-4" />
                                                                </button>
                                                        </div>

                                                        <PersonalDetailsForm
                                                                personalDetails={personalDetails}
                                                                setPersonalDetails={setPersonalDetails}
                                                                setFile={setFile}
                                                        />
                                                        <div
                                                                className="flex justify-between items-center"
                                                        >
                                                                <h1
                                                                        className="badge badge-primary badge-outline"
                                                                >
                                                                        Qui etes-vous?
                                                                </h1>
                                                                <button
                                                                        onClick={handleResetExperiences}
                                                                        className="btn btn-primary btn-sm"
                                                                >
                                                                        <RotateCw className="w-4" />
                                                                </button>
                                                        </div>




                                                        <ExperiencesForm
                                                                experiences={experiences}
                                                                setExperiences={setExperiences}
                                                        />

                                                        <div
                                                                className="flex justify-between items-center"
                                                        >
                                                                <h1
                                                                        className="badge badge-primary badge-outline"
                                                                >
                                                                        Education
                                                                </h1>
                                                                <button
                                                                        onClick={handleResetEducation}
                                                                        className="btn btn-primary btn-sm"
                                                                >
                                                                        <RotateCw className="w-4" />
                                                                </button>
                                                        </div>

                                                        <EducationForm
                                                                education={educations}
                                                                setEducation={setEducations}
                                                        />

                                                        <div
                                                                className="flex justify-between items-center"
                                                        >
                                                                <h1
                                                                        className="badge badge-primary badge-outline"
                                                                >
                                                                        Langue
                                                                </h1>
                                                                <button
                                                                        onClick={handleResetLanguage}
                                                                        className="btn btn-primary btn-sm"
                                                                >
                                                                        <RotateCw className="w-4" />
                                                                </button>
                                                        </div>

                                                        <LanguageForm
                                                                languages={language}
                                                                setLanguage={setLanguage}
                                                        />


                                                        <div
                                                                className=" flex justify-between"
                                                        >
                                                                <div
                                                                        className="w-1/2"
                                                                >
                                                                        <div
                                                                                className="flex justify-between items-center"
                                                                        >
                                                                                <h1
                                                                                        className="badge badge-primary badge-outline"
                                                                                >
                                                                                        Competences
                                                                                </h1>
                                                                                <button
                                                                                        onClick={handleResetSkills}
                                                                                        className="btn btn-primary btn-sm"
                                                                                >
                                                                                        <RotateCw className="w-4" />
                                                                                </button>
                                                                        </div>
                                                                        <SkillForms
                                                                                skills={skills}
                                                                                setSkills={setSkills}
                                                                        />
                                                                </div>

                                                                <div
                                                                        className=" ml-4w-1/2"
                                                                >
                                                                        <div
                                                                                className="flex justify-between items-center"
                                                                        >
                                                                                <h1
                                                                                        className="badge badge-primary badge-outline"
                                                                                >
                                                                                        Loisirs
                                                                                </h1>
                                                                                <button
                                                                                        onClick={handleResetHobbies}
                                                                                        className="btn btn-primary btn-sm"
                                                                                >
                                                                                        <RotateCw className="w-4" />
                                                                                </button>
                                                                        </div>
                                                                        <HobbiesForm
                                                                                hobbies={hobbies}
                                                                                setHobbies={setHobbies}
                                                                        />
                                                                </div>


                                                        </div>

                                                </div>
                                        </div>


                                        {/* voci le previsualisateur  */}

                                        <div
                                                style={{ backgroundImage: "url('/file.svg')" }}
                                                className="w-2/3 h-full bg-base-100 bg-cover bg-center scrollable-preview relative"
                                        >

                                                <div
                                                        className=" flex items-center justify-center fixed z-[9999] top-5 right-5"
                                                >
                                                        <input
                                                                type="range"
                                                                min={50}
                                                                max={200}
                                                                value={zoom}
                                                                onChange={(e) => setZoom(Number(e.target.value))}
                                                                className="range range-xs range-primary"
                                                        />
                                                        <p
                                                                className="ml-4 text-sm text-primary"
                                                        >
                                                                {zoom}%
                                                        </p>
                                                </div>



                                                <select
                                                        value={theme}
                                                        onChange={(e) => setTheme(e.target.value)}
                                                        className="select w-auto select-bordered rounded-xl fixed z-[9999] select-sm top-12 right-5"
                                                >
                                                        {themes.map((themeName) => (
                                                                <option key={themeName} value={themeName}>
                                                                        {themeName}
                                                                </option>
                                                        ))}
                                                </select>
                                                <div
                                                        className="flex justify-center items-center"
                                                        style={{
                                                                transform: `scale(${zoom / 200})`
                                                        }}
                                                >
                                                        <CVPreview
                                                                personnalDetails={personalDetails}
                                                                file={file}
                                                                theme={theme}
                                                                experiences={experiences}
                                                                educations={educations}
                                                                languages={language}
                                                                hobbies={hobbies}
                                                                skills={skills}
                                                                download={false}
                                                        />
                                                </div>
                                        </div>
                                </section>

                                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                <dialog id="my_modal_3" className="modal">
                                        <div className="modal-box w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                                                <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                </form>
                                                <div
                                                        className="mt-5"
                                                >
                                                        <div
                                                        onClick={handleDownloadPdf}
                                                        className="flex justify-end mb-5">
                                                                <button className="btn btn-primary">
                                                                        Telecharger
                                                                        <Save className="w-4" />
                                                                </button>
                                                        </div>
                                                        <div
                                                                className="w-full max-x-full overflow-auto"
                                                        >
                                                                <div
                                                                        className="w-full max-w-full flex justify-center items-center"
                                                                >
                                                                        <CVPreview
                                                                                personnalDetails={personalDetails}
                                                                                file={file}
                                                                                theme={theme}
                                                                                experiences={experiences}
                                                                                educations={educations}
                                                                                languages={language}
                                                                                hobbies={hobbies}
                                                                                skills={skills}
                                                                                download={true}
                                                                                ref={cvPreviewRef}
                                                                        />
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </dialog>
                        </div>
                        <div
                                className="lg:hidden"
                        >
                                <div className="hero bg-base-200 min-h-screen">
                                        <div className="hero-content text-center">
                                                <div className="max-w-md">
                                                        <h1 className="text-3xl font-bold"> Desole cette application est accessible uniquement sur ordinateur</h1>
                                                        <Image
                                                                src="/sad-sorry.gif"
                                                                alt="Picture of the author"
                                                                width={500}
                                                                height={500}
                                                                className="mx-auto my-6"
                                                        />
                                                        <p className="py-6">
                                                                Pour creer et personnaliser votre CV, veuillez utiliser un ordinateur, Nous vous remercions de votre comprehension.
                                                        </p>

                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        );
}
