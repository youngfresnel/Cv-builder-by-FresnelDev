import { Experience } from '@/type';
import { Plus } from 'lucide-react';
import React, { useState } from 'react'


type Props = {
        experiences: Experience[];
        setExperiences: (experiences: Experience[]) => void;

}

const ExperiencesForm: React.FC<Props> = (props: Props) => {

        const [newExperience, setNewExperience] = useState<Experience>({
                jobTitle: '',
                companyName: '',
                startDate: '',
                endDate: '',
                description: '',
        })


        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, fied: keyof Experience) => {
                setNewExperience({ ...newExperience, [fied]: e.target.value })
        }

        const handleAddExperiences = () => {
                props.setExperiences([...props.experiences, newExperience])
                setNewExperience(
                        {
                                jobTitle: '',
                                companyName: '',
                                startDate: '',
                                endDate: '',
                                description: '',
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
                                                placeholder='Nom complet'
                                                value={newExperience.jobTitle}
                                                onChange={(e) => handleChange(e, 'jobTitle')}
                                                className='input input-bordered w-full'
                                        />
                                        <input
                                                type="text"
                                                placeholder="Nom de l'entreprise"
                                                value={newExperience.companyName}
                                                onChange={(e) => handleChange(e, 'companyName')}
                                                className='input input-bordered w-full ml-4'
                                        />
                                </div>
                                <div
                                        className='flex justify-between'
                                >
                                        <input
                                                type={newExperience.startDate ? "date" : "text"}
                                                placeholder='Date de debut'
                                                onFocus={(e) =>(e.target.type = "date")}
                                                onBlur={(e) => {
                                                        if (!newExperience.startDate) e.target.type = "text"
                                                }}
                                                value={newExperience.startDate}
                                                onChange={(e) => handleChange(e, 'startDate')}
                                                className='input input-bordered w-full'
                                        />
                                        <input
                                                type={newExperience.endDate ? "date" : "text"}
                                                placeholder='Date de fin'
                                                onFocus={(e) => e.target.type = "date"}
                                                onBlur={(e) => {
                                                        if (!newExperience.endDate) e.target.type = "text"
                                                }}
                                                value={newExperience.endDate}
                                                onChange={(e) => handleChange(e, 'endDate')}
                                                className='input input-bordered w-full ml-4'
                                        />

                                </div>
                                <textarea
                                        placeholder='Description '
                                        value={newExperience.description}
                                        onChange={(e) => handleChange(e, 'description')}
                                        className='input input-bordered w-full text-wrap'
                                ></textarea>
                        </div>
                        <button
                                onClick={handleAddExperiences}
                                className='btn btn-primary mt-4'
                        >
                                Ajouter
                                <Plus className='w-4' />
                        </button>
                </div>
        )
}

export default ExperiencesForm