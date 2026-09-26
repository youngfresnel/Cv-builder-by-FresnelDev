import { Education } from '@/type';
import { Plus } from 'lucide-react';
import React, { useState } from 'react'

type Props = {
        education: Education[];
        setEducation: (experiences: Education[]) => void;

}


const EducationForm: React.FC<Props> = ({ education, setEducation }) => {


        const [newEducation, setNewEducation] = useState<Education>(
                {
                        id: "",
                        school: "",
                        degree: "",
                        description: "",
                        startDate: "",
                        endDate: "",
                }
        )

        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, fied: keyof Education) => {
                setNewEducation({ ...newEducation, [fied]: e.target.value })
        }

        const handleAddEducation = () => {
                setEducation([...education, newEducation])
                setNewEducation(
                        {
                                id: "",
                                school: "",
                                degree: "",
                                description: "",
                                startDate: "",
                                endDate: "",
                        }
                )
        }



        return (
                <div>
                        <div
                                className='flex flex-col gap-4'
                        >
                                <div
                                        className='flex justify-between'
                                >
                                        <input
                                                type="text"
                                                placeholder={`Nom de l'ecole`}
                                                value={newEducation.school}
                                                onChange={(e) => handleChange(e, "school")}
                                                className='input input-bordered w-full'
                                        />
                                        <input
                                                type="text"
                                                placeholder="Nom du diplome"
                                                value={newEducation.degree}
                                                onChange={(e) => handleChange(e, "degree")}
                                                className='input input-bordered w-full ml-4'
                                        />
                                </div>
                                <div
                                        className='flex justify-between'
                                >
                                        <input
                                                type={newEducation.startDate ? "date" : "text"}
                                                placeholder='Date de debut'
                                                onFocus={(e) => (e.target.type = "date")}
                                                onBlur={(e) => {
                                                        if (!newEducation.startDate) e.target.type = "text"
                                                }}
                                                value={newEducation.startDate}
                                                onChange={(e) => handleChange(e, 'startDate')}
                                                className='input input-bordered w-full'
                                        />
                                        <input
                                                type={newEducation.endDate ? "date" : "text"}
                                                placeholder='Date de fin'
                                                onFocus={(e) => e.target.type = "date"}
                                                onBlur={(e) => {
                                                        if (!newEducation.endDate) e.target.type = "text"
                                                }}
                                                value={newEducation.endDate}
                                                onChange={(e) => handleChange(e, 'endDate')}
                                                className='input input-bordered w-full ml-4'
                                        />

                                </div>
                                <textarea
                                        placeholder='Description '
                                        value={newEducation.description}
                                        onChange={(e) => handleChange(e, 'description')}
                                        className='input input-bordered w-full text-wrap'
                                ></textarea>
                        </div>
                        <button
                                onClick={handleAddEducation}
                                className='btn btn-primary mt-4'
                        >
                                Ajouter
                                <Plus className='w-4' />
                        </button>
                </div>
        )
}

export default EducationForm