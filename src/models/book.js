export const MODEL_BOOK = {
    title: {
        label: "Название",
        value: "",
        type: "text",
        required: true,
        invalidFeedback: "Укажите название книги"
    },
    cover: {
        label: "Обложка книги",
        value: "",
        type: "image"
    },
    description: {
        label: "Описание",
        value: "",
        type: "textarea",
        required: true,
        invalidFeedback: "Укажите описание книги"
    },
    author: {
        label: "Автор",
        value: "",
        type: "text",
        required: true,
        invalidFeedback: "Укажите автора книги"
    },
    publisher: {
        label: "Издательство",
        value: "",
        type: "text",
        required: true,
        invalidFeedback: "Укажите издательство книги"
    },
    isbn: {
        label: "Код ISBN",
        value: "",
        type: "text",
        required: true,
        pattern: "^(?:ISBN(?:-1[03])?:? )?(?=[0-9X]{10}$|(?=(?:[0-9]+[- ]){3})[- 0-9X]{13}$|97[89][0-9]{10}$|(?=(?:[0-9]+[- ]){4})[- 0-9]{17}$)(?:97[89][- ]?)?[0-9]{1,5}[- ]?[0-9]+[- ]?[0-9]+[- ]?[0-9X]$",
        invalidFeedback: "Укажите код ISBN книги (Например 979-9-999-99999-9)"
    },
    yearOfPublishing: {
        label: "Год издания",
        value: "",
        type: "text",
        required: true,
        pattern: "^(19|20)\\d{2}$",
        maxLength: 4,
        invalidFeedback: "Укажите год издания (YYYY)"
    },
    numberOfPage: {
        label: "Количество страниц",
        value: "",
        type: "text",
        pattern: "^\\d+$",
        invalidFeedback: "Укажите количество страниц"
    },
    rating: {
        label: "Рейтинг",
        value: -1,
        type: "rating"
    },
    reviews: {
        label: "Отзывы тех, кто прочитал",
        value: "",
        type: "textarea"
    },
    personalNotes: {
        label: "Личные заметки по книге",
        value: "",
        type: "textarea"
    }
};