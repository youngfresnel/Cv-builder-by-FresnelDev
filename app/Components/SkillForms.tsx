import { Skill } from '@/type';
import { Plus } from 'lucide-react';
import React, { useState } from 'react'

type Props = {
        skills: Skill[];
        setSkills: (skills: Skill[]) => void;

}



const SkillForms: React.FC<Props> = (props: Props) => {

        const [newSkill, setNewSkill] = useState<Skill>(
                {
                        id: "",
                        name: ""
                }
        )

        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, fied: keyof Skill) => {
                setNewSkill({ ...newSkill, [fied]: e.target.value })
        }

        const handleAddSkills = () => {
                props.setSkills([...props.skills, newSkill])
                setNewSkill(
                        {
                                id: "",
                                name: ""
                        }
                )
        }

        return (
                <div>
                        <div
                        className='mt-4'
                        >
                                <input
                                type="text"
                                placeholder={`Competences`}
                                value={newSkill.name}
                                onChange={(e) => handleChange(e, "name")}
                                className='input input-bordered w-full'
                        />
                        </div>
                          <button
                                onClick={handleAddSkills}
                                className='btn btn-primary mt-4'
                        >
                                Ajouter
                                <Plus className='w-4' />
                        </button>
                </div>
        )
}

export default SkillForms