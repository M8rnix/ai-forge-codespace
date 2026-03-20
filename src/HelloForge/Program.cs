using System;

namespace HelloForge
{
    internal class Program
    {
        private static int Main(string[] args)
        {
            Console.WriteLine("What is your name?");
            string? userName = Console.ReadLine();
            Console.WriteLine($"Hello World {userName}");
            return 0;
        }
    }
}
