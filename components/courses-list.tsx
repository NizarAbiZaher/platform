import { Course, Purchase } from '@prisma/client';
import { CourseCard } from '@/components/course-card';

type CourseWithProgress = Course & {
    progress: number | null;
    chapters: { id: string }[];
}

type PurchasedCourse = Purchase[]

interface CoursesPurchased {
    purchase: PurchasedCourse[];
}

interface CoursesListProps {
    items: CourseWithProgress[];
}

export const CoursesList = async ({
    items,
}: CoursesListProps) => {
        
    return (
        <div>
            
            <div className=' py-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto px-4 lg:px-0'>
                {items.map((item) => (
                    <CourseCard 
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        imageUrl={item.imageUrl!}
                        chaptersLength={item.chapters.length}
                        progress={item.progress}
                        description={item.description!}
                        price={item.price!}
                        createdAt={item.createdAt}
                    />
                ))}
            </div>
            {items.length === 0 && (
                <div className='text-center text-base text-muted-foreground mt-10'>
                    No courses found
                </div>
            )}
        </div>
    )
}