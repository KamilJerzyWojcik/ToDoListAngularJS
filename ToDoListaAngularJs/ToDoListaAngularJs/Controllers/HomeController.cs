using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ToDoListaAngularJs.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ToDoListaAngularJs.Controllers
{
	public class HomeController : Controller
	{
		// GET: /<controller>/
		public IActionResult Todo()
		{
			return View();
		}

		public IActionResult Test()
		{
			return View();
		}

		public IActionResult Items()
		{
			Item[] items = new Item[]
			{
				new Item() {Action = "kupić kwiaty", Done = false},
				new Item() {Action = "Kupić buty", Done = false},
				new Item() {Action = "Odebrać bilety", Done = true},
				new Item() {Action = "Zadzwonić do Janka", Done = false }
			};

			return Json(items);
		}
	}
}
