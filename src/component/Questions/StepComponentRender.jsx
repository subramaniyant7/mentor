import React from 'react'

const StepComponenRender = ({ fields }) => {
    return (
        <>
            {
                fields.map((field, index) => {
                    return (
                        <div className="relative mb-6" key={index}>
                            <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={field.label}>
                                {field.label}
                            </label>
                            {
                                field.type === 'input' ?
                                    <input
                                        type={field.type}
                                        className="w-full border-none px-3 py-[0.32rem] leading-[2.15] input-bg focus:border-none focus-visible:border-none focus-visible:outline-none"
                                        placeholder={field.placeholder}
                                        style={{
                                            color: "#232323",
                                        }}
                                    />
                                    :
                                    field.type === 'dropdown' ?
                                        <select

                                            className="w-full border-none px-3 py-[0.32rem] leading-[2.15] input-bg h-11 focus:border-none focus-visible:border-none focus-visible:outline-none"
                                            placeholder={field.placeholder}
                                            style={{
                                                color: "#232323",
                                            }}
                                        >
                                            {
                                                field.options.map((option, index) => <option value={option.key} key={index}> {option.value} </option>)
                                            }
                                        </select>
                                        :

                                        field.type === 'textbox' ?
                                            <>
     
                                                <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border
                                                   
                                                 focus:visible:outline-none focus:visible:border-none
                                                " placeholder="Write your thoughts here..." ></textarea>
                                            </>
                                            :
                                            field.type === 'checkbox' ?
                                                <div className="flex items-center me-4">
                                                    {
                                                        field.options.map((option, index) =>
                                                            <div className="flex items-center me-4" key={index}>
                                                                <input id="inline-radio" type="radio" value="" name={field.name} className="w-4 h-4 text-blue-600 bg-gray-100
                                                border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700
                                                dark:border-gray-600" />
                                                                <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{option.value}</label>
                                                            </div>
                                                        )
                                                    }


                                                </div>
                                                :
                                                null
                            }
                        </div>
                    )
                })
            }
        </>
    )
}

export default StepComponenRender;