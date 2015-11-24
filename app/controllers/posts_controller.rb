class PostsController < ApplicationController
	# before_action
	before_filter :authenticate_user!, except: [:index, :show]
	def index
	  if params[:search]
		@posts = Post.search(params[:search]).order("created_at DESC")
		else
		@posts = Post.all.order('created_at DESC')
		end
		@markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML)
	end

	def new
		@post = current_user.posts.build
	end

	def create
		@post = current_user.posts.build(post_params)
		if @post.save
			redirect_to @post
		else
			render 'new'
		end
	end

	def show
		@post = Post.find(params[:id])
		@markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML)
	end

	def edit
		@post = Post.find(params[:id])
	end

	def update
		@post = Post.find(params[:id])

		if @post.update(params[:post].permit(:title, :body))
			redirect_to @post
		else
			render 'edit'
		end	
	end

	def destroy
		@post = Post.find(params[:id])
		@post.destroy
		redirect_to root_path
	end

	private
		def post_params
			params.require(:post).permit(:title, :body)
		end
end
