import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Code, Briefcase, FileCode } from 'lucide-react';
import type { Post } from '@/types/sanity';
import BlogPosts from './BlogPosts';

interface BlogTabsProps {
  posts: Post[];
  projectPosts: Post[];
  reactPosts: Post[];
  javascriptPosts: Post[];
}

const BlogTabs = ({ posts, projectPosts, reactPosts, javascriptPosts }: BlogTabsProps) => {
  return (
    <Tabs defaultValue="all" className="mb-6">
        <TabsList className="flex justify-center py-6 max-w-[29rem] mx-auto rounded-full bg-forest-900 border-[3px] border-sage-100 shadow-lg shadow-forest-500 text-sage-100 
          max-md:rounded-3xl max-md:w-50 max-md:min-h-[10rem] max-md:flex max-md:flex-col max-md:justify-between max-md:gap-1 max-md:py-2"
          >
          <TabsTrigger 
            className="mr-2 rounded-3xl py-1 border-2 border-transparent data-[state=active]:bg-lime-500 data-[state=active]:border-sage-100 data-[state=active]:shadow-sm data-[state=active]:shadow-sage-300 hover:bg-forest-500
            max-md:w-full max-md:h-8 max-md:flex max-md:items-center max-md:justify-center max-md:mr-0" 
            value="all">
            <FileCode className="w-4 h-4 mr-2" />
            All Posts
          </TabsTrigger>
          <TabsTrigger 
            className="mr-2 py-1 rounded-3xl border-2 border-transparent data-[state=active]:bg-lime-500 data-[state=active]:border-sage-100 data-[state=active]:shadow-sm data-[state=active]:shadow-sage-300 hover:bg-forest-500
            max-md:w-full max-md:h-8 max-md:flex max-md:items-center max-md:justify-center max-md:mr-0" 
            value="project">
            <Briefcase className="w-4 h-4 mr-2" />
            Projects
          </TabsTrigger>
          <TabsTrigger 
            className="mr-2 py-1 rounded-3xl border-2 border-transparent data-[state=active]:bg-lime-500 data-[state=active]:border-sage-100 data-[state=active]:shadow-sm data-[state=active]:shadow-sage-300 hover:bg-forest-500
            max-md:w-full max-md:h-8 max-md:flex max-md:items-center max-md:justify-center max-md:mr-0" 
            value="react">
            <Code className="w-4 h-4 mr-2" />
            React
          </TabsTrigger>
          <TabsTrigger 
            className="py-1 rounded-3xl border-2 border-transparent data-[state=active]:bg-lime-500 data-[state=active]:border-sage-100 data-[state=active]:shadow-sm data-[state=active]:shadow-sage-300 hover:bg-forest-500
            max-md:w-full max-md:h-8 max-md:flex max-md:items-center max-md:justify-center max-md:mr-0" 
            value="javascript">
            <Code className="w-4 h-4 mr-2" />
            JavaScript
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <BlogPosts posts={posts} />
        </TabsContent>

        <TabsContent value="project" className="mt-6">
          <BlogPosts posts={projectPosts} />
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
