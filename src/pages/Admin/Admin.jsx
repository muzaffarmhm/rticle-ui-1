import React from 'react'

export default function Admin() {
	return (
		<div>
			<div>
				<link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet" />
				<div className="flex items-center justify-center min-h-screen bg-gray-50">
					<div className="col-span-12">
						<div className="overflow-auto lg:overflow-visible ">
							<table className="table text-gray-400 border-separate space-y-6 text-sm">
								<thead className="bg-gray-200 text-gray-500">
									<tr>
										<th className="p-3">Username</th>
										<th className="p-3 text-left">Category</th>
										<th className="p-3 text-left">Status</th>
										<th className="p-3 text-left">Action</th>
									</tr>
								</thead>
								<tbody>
									<tr className="bg-gray-200">
										<td className="p-3">
											<div className="flex align-items-center">
												<img className="rounded-full h-12 w-12  object-cover" src="https://images.unsplash.com/photo-1613588718956-c2e80305bf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" alt="unsplash image" />
												<div className="ml-3 p-3">
													<div className>User 1</div>
												</div>
											</div>
										</td>
										<td className="p-3">
											Technology
										</td>
										<td className="p-3">
											<span className="bg-green-400 text-gray-50 rounded-lg px-2">Approve</span>
										</td>
										<td className="p-3">
											<a href="#" className="text-gray-400 hover:text-white  mr-2">
												<i className="material-icons-outlined text-base">visibility</i>
											</a>
											<a href="#" className="text-gray-400 hover:text-green-500 mx-2">
												<i className="material-icons-outlined text-base">done</i>
											</a>
											<a href="#" className="text-gray-400 hover:text-red-900 ml-2">
												<i className="material-icons-round text-base">close</i>
											</a>
										</td>
									</tr>
									<tr className="bg-gray-200">
										<td className="p-3">
											<div className="flex align-items-center">
												<img className="rounded-full h-12 w-12   object-cover" src="https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="unsplash image" />
												<div className="ml-3 p-3">
													<div className>User 2</div>
												</div>
											</div>
										</td>
										<td className="p-3">
											Technology
										</td>
										<td className="p-3">
											<span className="bg-red-400 text-gray-50 rounded-lg px-2">Disapprove</span>
										</td>
										<td className="p-3">
											<a href="#" className="text-gray-400 hover:text-white  mr-2">
												<i className="material-icons-outlined text-base">visibility</i>
											</a>
											<a href="#" className="text-gray-400 hover:text-green-500 mx-2">
												<i className="material-icons-outlined text-base">done</i>
											</a>
											<a href="#" className="text-gray-400 hover:text-red-900 ml-2">
												<i className="material-icons-round text-base">close</i>
											</a>
										</td>
									</tr>
									<tr className="bg-gray-200">
										<td className="p-3">
											<div className="flex align-items-center">
												<img className="rounded-full h-12 w-12   object-cover" src="https://images.unsplash.com/photo-1600856209923-34372e319a5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2135&q=80" alt="unsplash image" />
												<div className="ml-3 p-3">
													<div className>User 3</div>
												</div>
											</div>
										</td>
										<td className="p-3">
											Food and Travel
										</td>
										<td className="p-3">
											<span className="bg-red-400 text-gray-50  rounded-lg px-2">Disapprove</span>
										</td>
										<td className="p-3">
											<a href="#" className="text-gray-400 hover:text-white  mr-2">
												<i className="material-icons-outlined text-base">visibility</i>
											</a>
											<a href="#" className="text-gray-400 hover:text-green-500 mx-2">
												<i className="material-icons-outlined text-base">done</i>
											</a>
											<a href="#" className="text-gray-400 hover:text-red-900 ml-2">
												<i className="material-icons-round text-base">close</i>
											</a>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<style dangerouslySetInnerHTML={{ __html: "\n\t.table {\n\t\tborder-spacing: 0 15px;\n\t}\n\n\ti {\n\t\tfont-size: 1rem !important;\n\t}\n\n\t.table tr {\n\t\tborder-radius: 20px;\n\t}\n\n\ttr td:nth-child(n+5),\n\ttr th:nth-child(n+5) {\n\t\tborder-radius: 0 .625rem .625rem 0;\n\t}\n\n\ttr td:nth-child(1),\n\ttr th:nth-child(1) {\n\t\tborder-radius: .625rem 0 0 .625rem;\n\t}\n" }} />
			</div>
		</div>
	)
}







