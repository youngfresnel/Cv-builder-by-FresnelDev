import { Education, Language } from '@/type';
import { Plus } from 'lucide-react';
import React, { useState } from 'react'


type Props = {
        languages: Language[];
        setLanguage: (experiences: Language[]) => void;

}
const LanguageForm: React.FC<Props> = ({ languages, setLanguage }) => {



        const [newLanguage, setNewLanguage] = useState<Language>(
                {
                        id: "",
                        language: "",
                        proficiency: ""
                }
        )

        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, fied: keyof Language) => {
                setNewLanguage({ ...newLanguage, [fied]: e.target.value })
        }

        const handleAddLanguage = () => {
                setLanguage([...languages, newLanguage])
                setNewLanguage(
                        {
                                id: "",
                                language: "",
                                proficiency: ""
                        }
                )
        }


        return (
                <div
                        className='space-y-4'
                >
                        <input
                                type="text"
                                placeholder={`Nom de l'ecole`}
                                value={newLanguage.language}
                                onChange={(e) => handleChange(e, "language")}
                                className='input input-bordered w-full'
                        />
                        <select
                                value={newLanguage.proficiency}
                                onChange={(e) => handleChange(e, "proficiency")}
                                className='select select-bordered w-full'
                        >
                                <option value="">Sélectionner la maîtrise</option>
                                <option value="Débutant">Débutant</option>
                                <option value="Intermédiaire">Intermédiaire</option>
                                <option value="Avancé">Avancé</option>
                        </select>
                           <button
                                onClick={handleAddLanguage}
                                className='btn btn-primary mt-4'
                        >
                                Ajouter
                                <Plus className='w-4' />
                        </button>
                </div>
        )
}

export default LanguageForm