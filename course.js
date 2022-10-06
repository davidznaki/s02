course {

    id - unique for the document
    name,
    description,
    price,
    slots,
    schedule,
    instructor,
    isActive,
    enrollees: [

        {
            id - document identifier,
            userId,
            userName(optional),
            isPaid,
            dateEnrolled
        }

    ]

}

course {

    id - unique for the document
    name,
    description,
    price,
    slots,
    schedule,
    instructor,
    isActive

}

enrollment: 
{
    id - document identifier,
    userId,
    userName(optional),
    courseId,
    courseName(optional),
    isPaid,
    dateEnrolled
}