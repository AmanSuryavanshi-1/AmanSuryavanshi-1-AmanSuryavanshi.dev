import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Code, Briefcase, FileCode } from 'lucide-react';
import type { Post } from '@/types/sanity';
import BlogPosts from './BlogPosts';

interface BlogTabsProps {
  posts: Post[];
  workPosts: Post[];
  reactPosts: Post[];
  javascriptPosts: Post[];
}

const BlogTabs = ({ posts, workPosts, reactPosts, javascriptPosts }: BlogTabsProps) => {
  return (
    <Tabs defaultValue="all" className="mb-8">
        <TabsList className="py-5 rounded-3xl bg-forest-900 border-[3px] border-sage-100 shadow-lg shadow-forest-500 text-sage-100 
           max-md:w-full max-md:min-h-[200px] max-md:flex max-md:flex-col max-md:justify-between max-md:gap-4 max-md:p-6
          max-[375px]:gap-2 max-[375px]:p-4">
          <TabsTrigger 
            className="mr-1 rounded-3xl border-2 border-transparent data-[state=active]:bg-lime-500 data-[state=active]:border-sage-100 data-[state=active]:shadow-sm data-[state=active]:shadow-sage-300 hover:bg-forest-500
            max-md:w-full max-md:h-14 max-md:flex max-md:items-center max-md:justify-center max-md:mr-0" 
            value="all">
            <FileCode className="w-4 h-4 mr-2" />
            All Posts
          </TabsTrigger>
          <TabsTrigger 
            className="mr-1 rounded-3xl border-2 border-transparent data-[state=active]:bg-lime-500 data-[state=active]:border-sage-100 data-[state=active]:shadow-sm data-[state=active]:shadow-sage-300 hover:bg-forest-500
            max-md:w-full max-md:h-14 max-md:flex max-md:items-center max-md:justify-center max-md:mr-0" 
            value="work">
            <Briefcase className="w-4 h-4 mr-2" />
            Work
          </TabsTrigger>
          <TabsTrigger 
            className="mr-1 rounded-3xl border-2 border-transparent data-[state=active]:bg-lime-500 data-[state=active]:border-sage-100 data-[state=active]:shadow-sm data-[state=active]:shadow-sage-300 hover:bg-forest-500
            max-md:w-full max-md:h-14 max-md:flex max-md:items-center max-md:justify-center max-md:mr-0" 
            value="react">
            <Code className="w-4 h-4 mr-2" />
            React
          </TabsTrigger>
          <TabsTrigger 
            className="mr-1 rounded-3xl border-2 border-transparent data-[state=active]:bg-lime-500 data-[state=active]:border-sage-100 data-[state=active]:shadow-sm data-[state=active]:shadow-sage-300 hover:bg-forest-500
            max-md:w-full max-md:h-14 max-md:flex max-md:items-center max-md:justify-center max-md:mr-0" 
            value="javascript">
            <Code className="w-4 h-4 mr-2" />
            JavaScript
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <BlogPosts posts={posts} />
        </TabsContent>

        <TabsContent value="work" className="mt-6">
          <BlogPosts posts={workPosts} />
        </TabsContent>

        <TabsContent value="react" className="mt-6">
          <BlogPosts posts={reactPosts} />
        </TabsContent>

        <TabsContent value="javascript" className="mt-6">
          <BlogPosts posts={javascriptPosts} />
        </TabsContent>
      </Tabs>
  );
};

export default BlogTabs;
