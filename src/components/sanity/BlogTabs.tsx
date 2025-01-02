import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Code, Briefcase, FileCode } from 'lucide-react';
import type { Post } from '@/sanity/sanity';
import BlogPosts from './BlogPosts';
import { memo, useMemo, useEffect, useState } from 'react';

interface BlogTabsProps {
  posts: Post[];
  projectPosts: Post[];
  reactPosts: Post[];
  javascriptPosts: Post[];
}

const MemoizedBlogPosts = memo(BlogPosts);

const BlogTabs = ({ posts, projectPosts, reactPosts, javascriptPosts }: BlogTabsProps) => {
  // Redirecting to the projects tab from projects section on landing page
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    if (window.location.hash === '#projects-tab') {
      setActiveTab('project');
      document.getElementById('projects-tab')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const tabContent = useMemo(() => ({
    all: <MemoizedBlogPosts posts={posts} />,
    project: <MemoizedBlogPosts posts={projectPosts} />,
    react: <MemoizedBlogPosts posts={reactPosts} />,
    javascript: <MemoizedBlogPosts posts={javascriptPosts} />,
  }), [posts, projectPosts, reactPosts, javascriptPosts]);

  return (
    // When user comes from project section on landing page, scroll to projects tab else show all posts
    <Tabs id="projects-tab" value={activeTab} onValueChange={setActiveTab} className="mb-6 py-16" >
        <TabsList className="flex justify-center py-6 max-w-[29rem] mx-auto rounded-full bg-forest-900 border-[3px] border-sage-100 shadow-lg shadow-forest-500 text-sage-100 
          max-md:rounded-3xl max-md:w-50 max-md:min-h-[10rem] max-md:flex max-md:flex-col max-md:justify-between max-md:gap-1 max-md:py-2"
          >
          <TabsTrigger 
            className="mr-2 rounded-3xl py-1 border-2 border-transparent data-[state=active]:bg-lime-500 data-[state=active]:border-sage-100 data-[state=active]:shadow-sm data-[state=active]:shadow-sage-300 transition-colors duration-200 will-change-transform
            max-md:w-full max-md:h-8 max-md:flex max-md:items-center max-md:justify-center max-md:mr-0" 
            value="all">
            <FileCode className="w-4 h-4 mr-2" />
            All Posts
          </TabsTrigger>
          <TabsTrigger 
            className="mr-2 py-1 rounded-3xl border-2 border-transparent data-[state=active]:bg-lime-500 data-[state=active]:border-sage-100 data-[state=active]:shadow-sm data-[state=active]:shadow-sage-300 transition-colors duration-200 will-change-transform
            max-md:w-full max-md:h-8 max-md:flex max-md:items-center max-md:justify-center max-md:mr-0" 
            value="project"
            // id="projects-tab" 
            >
            <Briefcase className="w-4 h-4 mr-2" />
            Projects
          </TabsTrigger>
          <TabsTrigger 
            className="mr-2 py-1 rounded-3xl border-2 border-transparent data-[state=active]:bg-lime-500 data-[state=active]:border-sage-100 data-[state=active]:shadow-sm data-[state=active]:shadow-sage-300 transition-colors duration-200 will-change-transform
            max-md:w-full max-md:h-8 max-md:flex max-md:items-center max-md:justify-center max-md:mr-0" 
            value="react">
            <Code className="w-4 h-4 mr-2" />
            React
          </TabsTrigger>
          <TabsTrigger 
            className="py-1 rounded-3xl border-2 border-transparent data-[state=active]:bg-lime-500 data-[state=active]:border-sage-100 data-[state=active]:shadow-sm data-[state=active]:shadow-sage-300 transition-colors duration-200 will-change-transform
            max-md:w-full max-md:h-8 max-md:flex max-md:items-center max-md:justify-center max-md:mr-0" 
            value="javascript">
            <Code className="w-4 h-4 mr-2" />
            JavaScript
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          {tabContent.all}
        </TabsContent>

        <TabsContent value="project" className="mt-6">
          {tabContent.project}
        </TabsContent>

        <TabsContent value="react" className="mt-6">
          {tabContent.react}
        </TabsContent>

        <TabsContent value="javascript" className="mt-6">
          {tabContent.javascript}
        </TabsContent>
    </Tabs>
  );
};

export default memo(BlogTabs);
